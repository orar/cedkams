import React from "react";
import {CompanyPageSettings} from "@/types/sitesettings";
import {Tr} from "@/types";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import Image from "next/image";

export function CompanyMilestones  ({ t, config }: { t: Tr, config: CompanyPageSettings['milestones']}) {
  return (
    <section>
      <MaxWidthWrapper>
        <div>
          {config.milestones__partners.map(partner => (
            <div className="">
              <Image
                src={partner.logo_url}
                alt={partner.alt}
                width={0}
                height={0}
                style={{ height: 100, width: 'auto'}}
              />
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
