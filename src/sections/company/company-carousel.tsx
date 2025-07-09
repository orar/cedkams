'use client'

import '../home/testimonials/testimonials.css'
import React from "react";
import {HeroCarousel} from "@/types/sitesettings";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'

import {usePrevNextButtons} from "@/sections/home/testimonials/buttons";


export function CompanyCarousel({ gallery }: { gallery: HeroCarousel[]}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [Autoplay()])

  return (
    <div className="company_carousel">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {gallery.map((img, index) => (
            <div className="embla__slide" key={index}>
             <Image
               src={img.img_url}
               alt={img.alt}
               width={1000}
               height={1000}
               style={{ height: 250, width: 'auto' }}
               className="rounded-xl"
             />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
