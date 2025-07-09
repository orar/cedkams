import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Icons} from "@/components/shared/icons";
import React from "react";
import {Tr} from "@/types";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {Card} from "@/components/ui/card";
import {CompanyPageSettingsType} from "@/sanity/schemaTypes/settings/companyPageSettingsType";
import { SocialIcons } from "@/components/shared/social-icons";

export function CompanyHero ({ t, config, name, contact }: {
  t: Tr,
  name: string,
  config: CompanyPageSettingsType['hero'],
  contact: CompanyPageSettingsType['contact']
}) {
  return (
    <section className="py-12 bg-gradient-to-br from-zinc-300/30 via-slate-50/90 to-orange-200/20">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-7">
          <div className="col-span-1 lg:col-span-3">
            <div className="max-w-xl">
              <div className="flex items-baseline mb-10">
                <h2 className="font-sans font-semibold text-5xl md:text-6xl">{name}</h2>
              </div>

              <div className="min-h-60">
                <p className="my-4 font-geist">
                  {config.hero__header_preword}
                </p>
                {config.hero__statement.map((s, i) => (
                  <p key={i} className="text-foreground/50 my-2">{s}</p>
                ))}
              </div>
              <div className="py-5">
                <Link href={`mailto:${contact.contact__info_emails[0]}`}>
                  <Button className="py-6 text-base px-12">
                    {t("company.work-with-us-btn")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:max-lg:grid-cols-2 md:max-lg:gap-x-7 space-y-7 md:max-lg:space-y-0">
            <Card className="p-7 space-y-5 max-w-sm">
              <h4 className="text-2xl font-semibold font-urban">{contact.contact__info_title}</h4>
              <div className="space-y-2">
                {contact.contact__info_phone_numbers.map(phone => (
                  <div key={phone} className="space-x-3 flex">
                    <Icons.phone className="size-5 text-muted-foreground" />
                    <Link href={`tel:${phone}`}><span className="tracking-wider">{phone} </span></Link>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {contact.contact__info_emails.map(email => (
                  <div key={email} className="space-x-3 flex items-center">
                    <Icons.mail className="size-5 text-muted-foreground" />
                    <span>
                      <Link href={`mailto:${email}`}>
                        {email}
                      </Link>
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap space-x-3">
                {contact.contact__info_socials.map(social => {
                  const Icon = SocialIcons[social.icon as keyof typeof SocialIcons]

                  return (
                    <div key={social.profile_url} className="inline ">
                      <Link href={social.profile_url} title={social.name}>
                        <Icon className="size-5" />
                      </Link>
                    </div>
                  )
                })}
              </div>
            </Card>
            <Card className="p-7 max-w-sm md:max-lg:h-full">
              <div className="space-y-5">
                {contact.contact__info_addresses.map(addr => (
                  <div key={addr.gps_address} className="space-y-2">
                    <p className="pr-10">{addr.address}</p>
                    <div className="flex space-x-3 text-muted-foreground">
                      <Icons.mapPin className="size-5" />
                      <span>{addr.gps_address}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>

  )
}


