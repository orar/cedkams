'use client'
import "./testimonials.css";

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
// import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './buttons'
import useEmblaCarousel from 'embla-carousel-react'
import {HomeLandingPage} from "@/types/sitesettings";
import {Card} from "@/components/ui/card";

type PropType = {
  testimonials: HomeLandingPage['testimonials']['items']
  options?: EmblaOptionsType
}

const TestimonialCarousel: React.FC<PropType> = (props) => {
  const { testimonials, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  // const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {testimonials.map((t, index) => (
            <div className="embla__slide" key={index}>
              <Card className=" p-3 space-y-7">
                <div className="">
                  <p className="text-lg">{t.testimony}</p>
                </div>
                <div className="">
                  <div className="font-heading text-lg">{t.name}</div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

      </div>
    </section>
  )
}

export default TestimonialCarousel
