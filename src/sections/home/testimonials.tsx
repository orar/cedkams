import {Tr} from "@/types";
import {HomeLandingPage} from "@/types/sitesettings";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {HeaderSection} from "@/components/shared/header-section";
import TestimonialCarousel from "@/sections/home/testimonials/testimonials-csl";

export function Testimonials({ t, config }: { t: Tr, config: HomeLandingPage['testimonials'] }) {

  return (
    <section className="py-12 md:py-24">
      <MaxWidthWrapper>
        <HeaderSection
          title={config.header.label}
          label={config.header.title}
          subtitle={config.header.subTitle}
        />
        <div>
          <TestimonialCarousel testimonials={config.items} />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}