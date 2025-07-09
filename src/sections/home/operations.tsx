import {Tr} from "@/types";
import {HomeLandingPageSettings} from "@/types/sitesettings";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {Card} from "@/components/ui/card";
import {HeaderSection} from "@/components/shared/header-section";
import Image from 'next/image'
import Link from "next/link";


export function Operations({ t, config }: { t: Tr, config: HomeLandingPageSettings['operations'] }) {

  return (
    <section id="companies" className="py-12 md:py-20">
      <MaxWidthWrapper className="space-y-12">
        <HeaderSection title={config.operations__header_title} label={config.operations__header_label} />
        <div className="flex flex-wrap max-[1080px]:justify-center">
          {config.operations__companies.map(sec => (
            <Card key={sec.slug} className="p-3 w-80 m-5 group">
              <Link href={`/${sec.slug}`}>
                <Image
                  src={sec.cover_url}
                  alt={sec.cover_alt}
                  width={200}
                  height={200}
                  style={{ height: 200 }}
                  className="w-80 rounded-lg"
                />
              </Link>

              <div className="mt-3 space-y-4">
                <h3 className="font-heading text-2xl font-semibold hover:text-primary focus:text-primary group-hover:text-primary">
                  <Link href={`/${sec.slug}`} title={t("learn_more")}>
                    {sec.title}
                  </Link>
                </h3>
                <p className="font-geist">{sec.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

