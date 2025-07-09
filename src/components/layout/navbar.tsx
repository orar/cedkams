"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/use-scroll";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import Image from "next/image";
import {fallbackLng, languages} from "@/i18n/settings";
import { useTranslation} from "@/i18n/client";
import {links} from "@/config/nav";
import {SocialLinks} from "@/components/layout/social-links";
import {LangSelector} from "@/components/layout/lang-selector";
import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";

export interface NavLinkType {
  key: string
  href?: string
  disabled?: boolean
  hrefs?: NavLinkType[]
  icon?: string
  description?: string
}

interface NavBarProps {
  scroll?: boolean;
  large?: boolean;
  lang: string
}

export default function NavBar({ scroll = false, lang }: NavBarProps) {
  const scrolled = useScroll({ shrink: 60, expand: 40 });
  const selectedLayout = useSelectedLayoutSegment();

  if (languages.indexOf(lang) < 0) lang = fallbackLng
  const { t } = useTranslation(lang, 'nav')

  return (
    <header
      className={`sticky top-0 z-40 max-[960px]:pr-10 flex w-full justify-center bg-background/80 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-white") : "border-b"
      }`}
    >
      <MaxWidthWrapper
        className={`flex items-center justify-between py-4 ${scroll && scrolled ? "h-14" : "h-20"} transition-all duration-300`}
      >
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/_static/logo.png" alt="Cedkam" width={140} height={48} className="rounded-md" />
          </Link>

          {links && links.length > 0 ? (
            <nav className="hidden gap-6 min-[960px]:flex">
              {links.map((item, index) => (
                <NavLink
                  lang={lang}
                  key={index}
                  link={item}
                  title={t(item.key)}
                  selected={String(selectedLayout)}
                  scrolled={scrolled}
                />
              ))}
            </nav>
          ) : null}
        </div>
        <div className="flex gap-2 md:gap-4 items-center">
          <Link href="/contact-us">
            <Button className="hidden sm:block bg-primary text-primary-foreground text-xs font-semibold rounded-full" size="sm">
              {t("button.contact")}
            </Button>
          </Link>
          <div className="flex items-center gap-1">
            <SocialLinks />
          </div>
          <LangSelector />
        </div>
      </MaxWidthWrapper>
    </header>
    
  );
}


export function NavLink({ lang, link, title, selected, scrolled }: { lang: string, link: NavLinkType, title: string, selected?: string, scrolled: boolean }) {

  if (!link.href && !link.hrefs) {
    return (
      <div></div>
    )
  }

  if (link.hrefs) {
    return (
      <NavMenu lang={lang} title={title} links={link.hrefs} scrolled={scrolled} />
    )
  }

  if (link.href) {
    return (
      <Link
        href={link.disabled ? "#" : link.href!}
        prefetch={true}
        className={cn(
          "flex items-center font-semibold transition-all duration-500 hover:text-primary",
          scrolled ? "text-[14px]" : "text-[16px] font-medium",
          link?.href?.startsWith(`/${selected}`)
            ? "text-primary"
            : "text-foreground/60",
          link.disabled && "cursor-not-allowed opacity-80",
        )}
      >
        {title}
      </Link>
    )
  }

  return null
}


