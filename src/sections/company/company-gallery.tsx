import {Tr} from "@/types";
import {CompanyPageSettingsType} from "@/sanity/schemaTypes/settings/companyPageSettingsType";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import React from "react";
import {CompanyCarousel} from "@/sections/company/company-carousel";

export function CompanyGallery  ({ t, config }: { t: Tr, config: CompanyPageSettingsType['hero']}) {

  return (
    <section className="py-7 md:py-12">
      <MaxWidthWrapper>
        <div>
          <CompanyCarousel gallery={config.hero__carousel} />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}