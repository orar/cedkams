import {Tr} from "@/types";
import {HomeLandingPage, HomeLandingPageSettings} from "@/types/sitesettings";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {Icons} from "@/components/shared/icons";
import BlurImage from "@/components/shared/blur-image";
import {Badge} from "@/components/ui/badge";
import Image from 'next/image'


export function MissionStatement({ t, config }: { t: Tr, config: HomeLandingPageSettings['mission'] }) {

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-zinc-200/50 via-orange-50/50 to-yellow-200/10">
      <MaxWidthWrapper className="space-y-12 md:space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-7 align-items-center max-lg:gap-y-10 max-md:text-center">
          <div className="col-span-1 md:col-span-3 lg:col-span-4">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl capitalize md:text-4xl lg:text-5xl font-light font-urban bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent animate-slide-in">
                {config.mission__header_title}
                </h2>
            </div>
          </div>
          <div className="cl-span1 md:col-start-4 md:col-span-4 lg:col-span-3">
            <p className="text-justify md:text-left text-gray-600 dark:text-gray-300 leading-relaxed  animate-fade-in">
              {config.mission__header_subText}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-6 max-lg:space-y-10">
          <div className="col-span-1 lg:col-span-2 max-[1080px]:lg:col-span-3 max-[1080px]:lg:pr-10 space-y-7 max-md:text-center">
            <h3 className="text-2xl font-heading font-bold">{config.mission__statement_title}</h3>
            <div className="font-geist space-y-3">
              {config.mission__statement_text.map((s, i) => (
                <p key={i} className="text-gray-600 dark:text-gray-300">{s}</p>
              ))}
            </div>
            <div className="flex flex-wrap max-md:justify-center">
              {config.mission__statement_value_tags.map(tag => {
                const Icon = Icons[tag.icon as keyof typeof Icons]
                return (
                  <div key={tag.tag} className="mt-3 mr-3">
                    <Badge className="rounded-full px-3 py-2 space-x-3 hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-red-500 to-red-700 dark:from-red-900 dark:to-red-900">
                      <Icon className="size-4" />
                      <span className="capitalize">{tag.tag}</span>
                    </Badge>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-span-1 lg:col-start-4 lg:col-span-3 md:pt-2 sm:max-lg:px-10">
            <div className="grid auto-rows-[120px] sm:auto-rows-[150px] md:auto-rows-[190px] lg:auto-rows-[200px] grid-cols-3 gap-4">
              {[...Array(5)].map((_, i) => {
                let img = config.mission__gallery[i]
                return (
                  <div
                    key={i}
                    className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 dark:bg-neutral-900 overflow-hidden hover:scale-[1.05] transition-transform duration-300 ${
                      i === 3 || i === 6 ? "col-span-2" : ""
                    }`}
                  >
                    <Image
                      src={img.img_url}
                      alt={img.alt}
                      width={1000}
                      height={1000}
                      style={{ width: "100%", height: "100%" }}
                      className="rounded-md object-cover hover:opacity-90 transition-opacity duration-300"
                    />
                  </div>
                )})}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
