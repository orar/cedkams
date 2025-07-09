'use client'

import "./partners-carousel.css"

import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import BlurImage from "@/components/shared/blur-image";
import {HomeLandingPage} from "@/types/sitesettings";
import Image from 'next/image';

type PropType = {
  slides: HomeLandingPage['partners']['partners']
  options?: EmblaOptionsType
}

const PartnersCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true })
  ])


  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play
    playOrStop()
  }, [emblaApi])

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

   /* emblaApi
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))*/
  }, [emblaApi])

  return (
    <div className="embla w-full">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((p, i) => (
            <div className="embla__slide" key={i}>
              <div className="embla__slide__number">
                <div>
                  <Image
                    src={p.logo}
                    alt={p.alt}
                    width={0}
                    height={0}
                    style={{ width: 'auto', height: 100 }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartnersCarousel
