'use client'

import './hero-carousel.css'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay";
import {HomeLandingPage, HomeLandingPageSettings} from "@/types/sitesettings";
import {clsx} from "clsx";
import Fade from 'embla-carousel-fade'

export function HeroCarousel({ slides, className }: { slides: HomeLandingPageSettings['hero']['hero__carousel'], className?: string }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(), Fade()])

  const cls = clsx('embla-hero', className)

  return (
    <div className={cls} ref={emblaRef}>
      <div className="embla-hero__container h-full">
        {slides.map(slide => (
          <div key={slide.alt} className="embla-hero__slide">
            <div
              className="w-screen h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.img_url}')` }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
