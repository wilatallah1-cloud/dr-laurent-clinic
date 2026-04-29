import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { LocaleProvider, type Locale } from "@/lib/locale";
import { ChatWidget } from "@/components/chat-widget";
import "../globals.css";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Dr. Laurent | Private Healthcare & Medical Aesthetic Solutions in Laval",
  description:
    "Dr. Laurent's private medical clinic combines comprehensive family medicine with advanced medico-aesthetic treatments. Personalized care in Laval, QC.",
  keywords: [
    "private clinic laval",
    "medical aesthetic",
    "family medicine",
    "botox laval",
    "dermal fillers",
    "Dr. Laurent",
    "médecine privée",
  ],
  openGraph: {
    title: "Dr. Laurent | Private Healthcare & Medical Aesthetic Solutions",
    description:
      "One physician. Two specialties. Comprehensive medical care and advanced aesthetic treatments under one roof.",
    type: "website",
    locale: "en_CA",
  },
};

const validLocales: Locale[] = ["en", "fr"];

export async function generateStaticParams() {
  return validLocales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!validLocales.includes(lang as Locale)) {
    notFound();
  }

  const locale = lang as Locale;

  return (
    <html
      lang={locale}
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {META_PIXEL_ID && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                alt=""
                src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        )}
        <LocaleProvider locale={locale}>
          {children}
          <ChatWidget />
        </LocaleProvider>
      </body>
    </html>
  );
}
