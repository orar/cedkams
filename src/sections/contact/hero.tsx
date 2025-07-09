import {Tr} from "@/types";
import {ContactPageSettingsType} from "@/sanity/schemaTypes/settings/contactPageSettingsType";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";


export function ContactHero  ({ t, config }: { t: Tr, config: ContactPageSettingsType['hero']}) {

  return (
    <section className="relative bg-cover w-full h-[40dvh]" style={{backgroundImage: `url(${config.hero__cover_img.img_url})`}}>
      <div className="absolute flex flex-col justify-center py-20 px-12 top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-gray-700/40 to-gray-900/80  md:bg-gradient-to-r md:from-gray-900/80 md:via-gray-700/70 md:via-gray-100 md:to-gray-100/10">
        <MaxWidthWrapper className="space-y-5">
          <h1 className="text-4xl md:text-7xl font-heading text-white ">
            {config.hero__header_title}
          </h1>
          <p className="text-gray-100 text-xl block">
            {config.hero__header_subText}
          </p>
        </MaxWidthWrapper>
      </div>
    </section>
  )
}
