#!/usr/bin/env node
// Reads a Myle patient export CSV and outputs a GHL-ready CSV with PHI stripped.
//
// Strips: NAM, vulnerability codes, family doctor, IPS, licence, pharmacy, site.
// Keeps:  name, phone (E.164), email, address, postal, DOB, last visit, status.
// Adds:   tags (Patient + import-batch + recency bucket).
//
// Usage:
//   node scripts/clean-myle-export.mjs <input.csv> <output.csv>
// Defaults to the Myle export in Downloads if args omitted.

import { readFileSync, writeFileSync } from 'node:fs';

const INPUT  = process.argv[2] || 'C:/Users/wilat/Downloads/LISTEDÉTAILLÉEDESDOSSIERSPATIENTS.csv';
const OUTPUT = process.argv[3] || 'C:/Users/wilat/Downloads/dr-laurent-patients-ghl-import.csv';
const IMPORT_TAG = 'MYLE-Import-2026-04-27';
const TODAY = new Date('2026-04-27');

function parseCSV(text) {
  if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
  const rows = [];
  let row = [], cur = '', inQuote = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuote) {
      if (c === '"') {
        if (text[i + 1] === '"') { cur += '"'; i++; } else inQuote = false;
      } else cur += c;
    } else {
      if (c === '"') inQuote = true;
      else if (c === ',') { row.push(cur); cur = ''; }
      else if (c === '\r') { /* ignore */ }
      else if (c === '\n') { row.push(cur); rows.push(row); row = []; cur = ''; }
      else cur += c;
    }
  }
  if (cur.length || row.length) { row.push(cur); rows.push(row); }
  return rows;
}

function cleanPhone(raw) {
  if (!raw || raw === 'N/A') return '';
  const stripped = String(raw).replace(/\([^)]*\)/g, '').trim();
  const digits = stripped.replace(/\D/g, '');
  if (digits.length === 10) return '+1' + digits;
  if (digits.length === 11 && digits.startsWith('1')) return '+' + digits;
  return '';
}

function cleanEmail(raw) {
  if (!raw || raw === 'N/A') return '';
  const t = String(raw).trim();
  if (!t.includes('@')) return '';
  return t.toLowerCase();
}

function reformatDate(raw) {
  if (!raw || raw === 'N/A' || raw === 'N\\A' || raw === '') return '';
  const m = String(raw).match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/);
  if (!m) return '';
  return `${m[2].padStart(2, '0')}/${m[3].padStart(2, '0')}/${m[1]}`;
}

function monthsAgo(raw) {
  if (!raw) return null;
  const m = String(raw).match(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/);
  if (!m) return null;
  const d = new Date(+m[1], +m[2] - 1, +m[3]);
  return Math.floor((TODAY - d) / (1000 * 60 * 60 * 24 * 30.44));
}

function escapeCSV(s) {
  s = s == null ? '' : String(s);
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

const text = readFileSync(INPUT, 'utf8');
const rows = parseCSV(text);
const header = rows[0];
const col = {
  last:         header.indexOf('Nom de famille'),
  first:        header.indexOf('Prénom'),
  dob:          header.indexOf('Date de naissance'),
  address:      header.indexOf('Adresse'),
  postal:       header.indexOf('Code Postal'),
  phone:        header.indexOf('Téléphone'),
  email:        header.indexOf('Adresse courriel'),
  status:       header.indexOf('Statut du patient'),
  lastVisit:    header.indexOf('Date du dernier RDV'),
  practitioner: header.indexOf('Ressource du dernier rendez-vous'),
  site:         header.indexOf('Site du dernier rendez-vous'),
};

function segmentFromSite(site) {
  const s = (site || '').trim();
  if (!s || s === 'N/A' || s === 'N\\A') return 'site-unknown';
  if (s === 'Dr Laurent Esthetik') return 'aesthetic-patient';
  if (s.startsWith('Clinique Medicale')) return 'medical-patient';
  if (s.startsWith('CLINIQUE PRÉVOYANCE') || s.startsWith('CLINIQUE PR')) return 'external-clinic';
  return 'site-other';
}

function cleanPractitioner(raw) {
  if (!raw) return '';
  const s = String(raw).trim();
  if (!s || s === 'N/A' || s === 'N\\A') return '';
  return s.replace(/\s*\(\d+\)\s*/g, '').replace(/\s*,\s*/g, ', ').trim();
}

const missing = Object.entries(col).filter(([, i]) => i < 0);
if (missing.length) {
  console.error('Missing expected columns:', missing.map(([k]) => k).join(', '));
  process.exit(1);
}

const out = [['First Name','Last Name','Email','Phone','Address','Postal Code','Date of Birth','Patient Status','Last Appointment','Last Visit Site','Last Visit Practitioner','Tags']];
const drops = { noName: 0, noContact: 0, blank: 0 };
const buckets = { '0-6mo': 0, '6-12mo': 0, '12-18mo': 0, '18-24mo': 0, '24mo+': 0, unknown: 0 };
const segments = { 'aesthetic-patient': 0, 'medical-patient': 0, 'external-clinic': 0, 'site-other': 0, 'site-unknown': 0 };

for (let i = 1; i < rows.length; i++) {
  const r = rows[i];
  if (!r || r.every(c => !c || c.trim() === '')) { drops.blank++; continue; }
  const first = (r[col.first] || '').trim();
  const last  = (r[col.last]  || '').trim();
  if (!first && !last) { drops.noName++; continue; }
  const phone = cleanPhone(r[col.phone]);
  const email = cleanEmail(r[col.email]);
  if (!phone && !email) { drops.noContact++; continue; }

  const m = monthsAgo(r[col.lastVisit]);
  let recency;
  if (m === null)      { buckets.unknown++;     recency = 'recency-unknown'; }
  else if (m < 6)      { buckets['0-6mo']++;    recency = 'recency-0-6mo'; }
  else if (m < 12)     { buckets['6-12mo']++;   recency = 'recency-6-12mo'; }
  else if (m < 18)     { buckets['12-18mo']++;  recency = 'recency-12-18mo'; }
  else if (m < 24)     { buckets['18-24mo']++;  recency = 'recency-18-24mo'; }
  else                 { buckets['24mo+']++;    recency = 'recency-24mo-plus'; }

  const site = (r[col.site] || '').trim();
  const practitioner = cleanPractitioner(r[col.practitioner]);
  const segment = segmentFromSite(site);
  segments[segment]++;

  out.push([
    first,
    last,
    email,
    phone,
    (r[col.address] || '').trim(),
    (r[col.postal]  || '').trim(),
    reformatDate(r[col.dob]),
    (r[col.status]  || '').trim(),
    reformatDate(r[col.lastVisit]),
    site === 'N/A' || site === 'N\\A' ? '' : site,
    practitioner,
    `Patient,${IMPORT_TAG},${recency},${segment}`,
  ]);
}

const csvOut = out.map(r => r.map(escapeCSV).join(',')).join('\r\n');
writeFileSync(OUTPUT, '﻿' + csvOut, 'utf8');

const totalIn = rows.length - 1;
const totalOut = out.length - 1;
console.log('');
console.log('Myle patient export to GHL import cleaner');
console.log('==========================================');
console.log(`Input:  ${INPUT}`);
console.log(`Output: ${OUTPUT}`);
console.log('');
console.log(`Total rows in:        ${totalIn}`);
console.log(`Total rows out:       ${totalOut}`);
console.log(`Dropped (no name):    ${drops.noName}`);
console.log(`Dropped (no contact): ${drops.noContact}`);
console.log(`Dropped (blank row):  ${drops.blank}`);
console.log('');
console.log('Last-visit recency cohorts (drives reactivation threshold pick):');
console.log(`  0-6 months:    ${buckets['0-6mo']}`);
console.log(`  6-12 months:   ${buckets['6-12mo']}`);
console.log(`  12-18 months:  ${buckets['12-18mo']}`);
console.log(`  18-24 months:  ${buckets['18-24mo']}`);
console.log(`  24+ months:    ${buckets['24mo+']}`);
console.log(`  unknown:       ${buckets.unknown}`);
console.log('');
console.log('Patient segment (drives reactivation targeting):');
console.log(`  aesthetic-patient: ${segments['aesthetic-patient']}  ← reactivation gold`);
console.log(`  medical-patient:   ${segments['medical-patient']}`);
console.log(`  external-clinic:   ${segments['external-clinic']}`);
console.log(`  site-other:        ${segments['site-other']}`);
console.log(`  site-unknown:      ${segments['site-unknown']}`);
console.log('');
console.log('Stripped (PHI, never imported): NAM, vulnerability codes,');
console.log('  family doctor, IPS, licence, pharmacy.');
