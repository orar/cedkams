import type {Tr} from "@/types";
import {HomeLandingPage, HomeLandingPageSettings} from "@/types/sitesettings";
import {HeroCarousel} from "@/sections/home/hero-carousel";
import {Button, buttonVariants} from "@/components/ui/button";
import Link from "next/link";


export function HeroLanding({ t, config }: { t: Tr, config: HomeLandingPageSettings['hero'] }) {

  return (
    <section className="relative h-[75dvh] w-full">
      <HeroCarousel slides={config.hero__carousel} className="w-full h-full" />
      <div className="absolute top-0 left-0 right-0 bottom-0 z-1 flex flex-col justify-end items-center bg-gradient-to-b from-zinc-500/20 via-gray-100/20 via-gray-600/70 to-gray-900/80  dark:bg-gray-900/60">
        <div className="text-foreground text-center px-7 pb-24">
          <div className="mx-auto max-w-4xl ">
            <h1 className="text-4xl md:text-6xl font-heading text-white">{config.hero__header_title}</h1>
            <p className="font-urban md:text-xl py-5 font-semibold text-gray-100">{config.hero__header_subText}</p>
          </div>
          <div className="max-w-4xl flex max-sm:flex-col justify-center items-center md:space-x-7 space-y-5 md:space-y-0 mx-auto">
            <Link href="/contact-us">
              <Button variant="outline" className="text-sm sm:text-lg bg-primary text-primary-foreground py-5 sm:py-7 px-12 border-0 hover:text-primary-foreground/80 hover:bg-primary hover:-brightness-[60%] transition-all duration-300 hover:scale-105">
                {t('landing.hero.buttons.contact-us')}
              </Button>
            </Link>
            <div className="">
              <Link href="/services" >
                <Button variant="ghost" className="text-sm sm:text-lg py-5 sm:py-7 px-12 border-0 bg-gray-50 hover:bg-gray-200 transition-all duration-300 hover:scale-105">
                  {t('landing.hero.buttons.services')}
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}