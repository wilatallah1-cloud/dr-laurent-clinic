"use client";

import NextLink from "next/link";
import { useLocale } from "@/lib/locale";
import { type ComponentProps } from "react";

export default function Link({
  href,
  ...props
}: ComponentProps<typeof NextLink>) {
  const locale = useLocale();
  const localizedHref =
    typeof href === "string" && href.startsWith("/")
      ? `/${locale}${href === "/" ? "" : href}`
      : href;
  return <NextLink href={localizedHref} {...props} />;
}
