import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {BaseServerProps, Tr} from "@/types";
import {fallbackLng, languages} from "@/i18n/settings";
import {useTranslation} from "@/i18n"
import {SocialLinks} from "@/components/layout/social-links";
import { cn } from "@/lib/utils";


export async function Footer({ lng }: { lng: string }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'layout')

  return (
    <section className="py-10 bg-gray-900 sm:pt-16 lg:pt-24 border-t border-gray-800">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-11 gap-y-16 gap-x-12">
          <div className="col-span-1 md:col-span-4 lg:pr-8">
            <Image src="/_static/logo.png" alt="cedkam logo" width={200} height={150} />
            <p className="text-base leading-relaxed text-gray-300 mt-7">
              {t("footer.foreword")}
            </p>
            <div className="text-gray-400 flex gap-x-10 items-center mt-3">
              <SocialLinks />
            </div>
          </div>
          <div className="col-span-2">
            <p className="text-sm font-bold tracking-widest text-white uppercase">
              {t("footer.company.title")}
            </p>
            <ul className="mt-6 space-y-4">
              <FooterLink href="/" className="text-gray-300 hover:text-primary">{t("footer.company.capital")}</FooterLink>
              <FooterLink href="/" className="text-gray-300 hover:text-primary">{t("footer.company.logistics")}</FooterLink>
              <FooterLink href="/" className="text-gray-300 hover:text-primary">{t("footer.company.food")}</FooterLink>
              <FooterLink href="/" className="text-gray-300 hover:text-primary">{t("footer.company.energy")}</FooterLink>
            </ul>
          </div>
          <div className="col-span-2 ">
            <p className="text-sm font-semibold tracking-widest text-white uppercase">
              {t("footer.pages.title")}
            </p>
            <ul className="mt-6 space-y-4">
              <FooterLink href="/" className="text-gray-300 hover:text-primary">{t("footer.pages.home")}</FooterLink>
              <FooterLink href="/" className="text-gray-300 hover:text-primary">{t("footer.pages.about")}</FooterLink>
              <FooterLink href="/" className="text-gray-300 hover:text-primary">{t("footer.pages.contact")}</FooterLink>
              <FooterLink href="/" className="text-gray-300 hover:text-primary">{t("footer.pages.news")}</FooterLink>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-3 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-white uppercase">
              {t("footer.articles.title")}
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
      <hr className="mt-16 mb-10 border-gray-800"/>
      <p className="text-sm text-center text-gray-500 font-semibold">
        ©{" "}{t("footer.copyright")}
      </p>
    </section>
  )
}

export function FooterLink ({ href, children, title, className }: { href: string, children: React.ReactNode, title?: string, className?: string }) {
  return (
    <li>
      <Link href={href} title={title}
         className={cn("flex text-lg font-urban transition-all duration-200 hover:text-primary hover:font-semibold focus:font-semibold", className)}
      >
        {children}
      </Link>
    </li>
  )
}