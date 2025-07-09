import {Tr} from "@/types";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {Card} from "@/components/ui/card";
import Image from "next/image";
import {AboutPageSettingsType} from "@/sanity/schemaTypes/settings/aboutPageSettingsType";


export default function AboutCSRSection({ t, config }: { t: Tr, config: AboutPageSettingsType['csr'] }) {

  return (
    <section className="py-12 md:py-24 bg-gray-100/50">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="col-span-1 lg:col-span-2 space-y-12">
            <h3 className="text-center lg:text-left text-4xl font-heading">
              {config.csr__csr_title}
            </h3>
            <div className="space-y-5 text-lg font-geist text-foreground/90">
              {config.csr__csr_statement.map(s => (
                <p>{s}</p>
              ))}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 lg:col-start-3 grid auto-rows-[129px] md:auto-rows-[192px] grid-cols-2 gap-7">
            <div className="row-span-2">
              <Image
                src={config.csr__csr_gallery[0].img_url}
                alt={config.csr__csr_gallery[0].alt}
                width={1000}
                height={1000}
                style={{width: '100%', height: '100%'}}
                className="rounded-lg aspect-square"
              />
            </div>
            <div className="">
              <Image
                src={config.csr__csr_gallery[1].img_url}
                alt={config.csr__csr_gallery[1].alt}
                width={1000}
                height={1000}
                style={{width: '100%', height: '100%'}}
                className="rounded-lg aspect-square"
              />
            </div>
            <div className="">
              <Image
                src={config.csr__csr_gallery[2].img_url}
                alt={config.csr__csr_gallery[2].alt}
                width={1000}
                height={1000}
                style={{width: '100%', height: '100%'}}
                className="rounded-lg aspect-square"
              />
            </div>

          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}