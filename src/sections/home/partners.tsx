import type {Tr} from "@/types";
import {HomeLandingPage} from "@/types/sitesettings";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {HeaderSection} from "@/components/shared/header-section";
import PartnersCarousel from "@/sections/home/partners-carousel";

export function Partners({ t, config }: { t: Tr, config: HomeLandingPage['partners'] }) {
  return (
    <section className="py-16">
      <MaxWidthWrapper className="space-y-7">
        <div>
          <HeaderSection
            title={config.header.title}
            label={config.header.label}
          />
        </div>
        <div className="max-w-7xl mx-auto">
          <PartnersCarousel slides={config.partners} options={{loop: true}} />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
