import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";
import { Providers } from "@/components/providers";

import "@fontsource-variable/cascadia-code";

export const metadata = {
  title: "León Soler - Portfolio",
  description: "Desarrollador y Programador Web con más de 3 años de experiencia.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="relative text-black dark:text-white">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <div
              className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-slate-900
              bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,216,216,0.5),rgba(255,255,255,0.9))]
              dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(198,119,119,0.3),rgba(255,255,255,0))]"
            >
            </div>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
