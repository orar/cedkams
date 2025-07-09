import {Tr} from "@/types";
import {AboutPageSettingsType} from "@/sanity/schemaTypes/settings/aboutPageSettingsType";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";


export default function AboutHero({ t, config }: { t: Tr, config: AboutPageSettingsType['hero'] }) {
  return (
    <section className="h-[40dvh] relative bg-cover" style={{backgroundImage: `url(${config.hero__cover_img.img_url})`}}>
      <div className="absolute flex py-20 px-12 md:px-32 top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-gray-700/40 to-gray-900/80  md:bg-gradient-to-r md:from-gray-900/80 md:via-gray-700/70 md:via-gray-100 md:to-gray-100/10">
      <MaxWidthWrapper className="space-y-5">
      <div className="max-w-2xl self-center space-y-5">
          <h1 className="text-4xl md:text-7xl font-heading text-white ">
            {config.hero__hero_title}
          </h1>
          <p className="text-gray-100 text-xl block">
            {config.hero__hero_subTitle}
          </p>
        </div>
        </MaxWidthWrapper>
      </div>
    </section>
  )
}