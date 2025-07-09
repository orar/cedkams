import {Tr} from "@/types";
import {HomeLandingPage, HomeLandingPageSettings} from "@/types/sitesettings";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {Card} from "@/components/ui/card";
import Image from "next/image";
import {Button} from "@/components/ui/button";

export function Milestones({ t, milestones }: {
  t: Tr,
  milestones: HomeLandingPageSettings['milestones'],
}) {
  const assets = Intl.NumberFormat('en-US', {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(milestones.milestones__assets);

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-secondary/30 via-slate-500/10 via-zinc-300/50 to-secondary/70">
      <MaxWidthWrapper>
        <div className="py-5 px-2">
          <h2 className="font-bold font-heading text-3xl">With <span className="tracking-widest">...</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-x-5 max-sm:gap-x-0">
          <div className="col-span-1 md:col-span-3 grid gap-4 grid-cols-1 md:grid-cols-7">
            <Card className="p-7 col-span-1 md:col-span-4 bg-primary text-primary-foreground">
              <div className="bg-[url('/_static/icons/checked.png')] bg-no-repeat bg-right">
                <div>Over</div>
                <div className="text-6xl font-heading my-3">{assets}</div>
                <p className="font-bold">{t("landing.milestones.assets")}</p>
              </div>

            </Card>
            <Card className="p-7 col-span-1 md:col-span-3 bg-destructive text-destructive-foreground">
              <div className="bg-[url('/_static/icons/handshake.png')] bg-no-repeat bg-right">
                <div>Over</div>
                <div className="text-6xl font-heading my-3">{milestones.milestones__partners}</div>
                <p className="font-bold">{t("landing.milestones.partners")}</p>
              </div>
            </Card>
            <Card className="col-span-1 md:col-span-7 bg-[url('/_static/icons/customer.png')] bg-[center_top_1rem] bg-x-repeat bg-right  ">
              <div className="p-7 grid md:gap-x-3 lg:gap-x-36 grid-cols-1 md:grid-cols-5 text-secondary-foreground bg-white/30 backdrop-blur-xl backdrop-brightness-90 rounded-xl">
                <div className="col-span-1 md:max-lg:col-span-2">
                  <p>Over</p>
                  <div className="text-6xl lg:text-6xl font-heading my-3">{milestones.milestones__clients_count}+</div>
                  <p className="font-bold">{t("landing.milestones.clients")}</p>
                </div>
                <div className="col-span-1 md:max-lg:col-span-3 lg:col-span-4 grid place-content-center">
                  {milestones.milestones__clients_statement && (
                    <p className="">{milestones.milestones__clients_statement}</p>
                  )}
                </div>
              </div>

            </Card>
          </div>
          <div className="col-span-2 order-first">
            <Card className="p-7 ">
              <div className="mb-7">
                <h4 className="font-urban text-3xl">Our Trusted Partners</h4>
              </div>
              <div className="flex flex-wrap gap-7">
                {milestones.milestones__partner_logos.map(partner => (
                  <span key={partner.name}>
                 <Image
                   src={partner.logo_url}
                   alt={partner.alt}
                   width={100}
                   height={100}
                   style={{width: "auto", height: 50}}
                 />
              </span>
                ))}
              </div>

            </Card>

          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}