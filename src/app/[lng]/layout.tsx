import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dir } from 'i18next'
import { languages, fallbackLng } from '@/i18n/settings'
import { useTranslation } from '@/i18n'
import { fontGeist, fontHeading, fontSans, fontUrban } from "@/assets/fonts";
import {cn} from "@/lib/utils";
import {Footer} from "@/components/layout/footer";
import NavBar from "@/components/layout/navbar";
import { NavMobile } from "@/components/layout/mobile-nav";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}


export async function generateMetadata({ params }: { params: any}) {
  let { lng } = await params
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)
  return {
    title: t('title'),
    description: 'A playground to explore new Next.js 13/14 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.'
  }
}

export default async function RootLayout({
                                           children, params
                                         }: Readonly<{
  children: React.ReactNode;
  params: any
}>) {
  const { lng } = await params
  return (
    <html lang={lng} dir={dir(lng)}>
    <head />
    <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
        fontUrban.variable,
        fontHeading.variable,
        fontGeist.variable,
      )}
    >
    <main className="">
      <NavMobile lang={lng} />
      <NavBar lang={lng} scroll={true} />
      {children}
      <Footer lng={lng} />
    </main>

    </body>
    </html>
  )
}
