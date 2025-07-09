import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {Tr} from "@/types";
import {CompanyPageSettingsType} from "@/sanity/schemaTypes/settings/companyPageSettingsType";
import {ServiceItemType} from "@/types/sitesettings";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import Image from "next/image";


export function CompanyServices({ t, config, email }: { t: Tr, config: CompanyPageSettingsType["services"], email: string }) {

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <MaxWidthWrapper className="space-y-12">
        <div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-urban font-semibold">
            {config.services__services_title}
          </h3>
        </div>
        <div className="">
          <CompanyServicesList
            t={t}
            email={email}
            services={config.services__services}
          />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

export function CompanyServicesList({ t, services, email }: { t: Tr, services: ServiceItemType[], email: string }) {

  return (
    <div>
      {services.map((service, idx) => {
        return (
          <div key={idx} className="grid grid-cols-1 lg:grid-cols-5 gap-x-12 py-10 border-b border-foreground/20">
            <div className="col-span-1 lg:col-span-2 space-y-5">
              <h3 className="text-urban text-3xl font-light">{service.name}</h3>
              <p className="text-foreground/60 no-underline text-base">{service.description}</p>
              <div>
                <Link href={`mailto:${email}?subject=${service.name}`}>
                  <Button size="sm">
                    {t("company.inquire_now")}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-3 flex space-x-10 py-7 md:py-3 overflow-x-auto">
              <Image
                src={service.cover_img.img_url}
                alt={service.cover_img.alt}
                width={300}
                height={150}
                style={{ height: 170}}
                className="rounded-xl pointer-events-none"
              />
              <Image
                src={service.gallery[0].img_url}
                alt={service.gallery[0].alt}
                width={300}
                height={150}
                style={{ height: 170}}
                className="rounded-xl pointer-events-none"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}