import {Tr} from "@/types";
import {ContactPageSettingsType} from "@/sanity/schemaTypes/settings/contactPageSettingsType";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {Card} from "@/components/ui/card";
import {Icons} from "@/components/shared/icons";
import Link from "next/link";
import ContactForm from "@/sections/contact/contact-form";
import { ContactMap } from "./map";

export function ContactSection  ({ t, config }: { t: Tr, config: ContactPageSettingsType['contact']}) {

  return (
    <section className="py-12 md:py-24">
      <div className=" pb-24 text-center mx-auto">
        <h2 className="text-red-600 text-2xl md:text-4xl tracking-widest font-heading font-bold">
          {config.contact__section_title}
        </h2>
      </div>
      <MaxWidthWrapper className="rounded-xl py-10 px-10 bg-gradient-to-br from-gray-100/50 via-zinc-100 to-zinc-200/60">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            <ContactForm />
          </div>
          <div className="md:col-span-2 md:col-start-4 space-y-10">
            <Card className="p-7 space-y-5">
              <h4 className="text-2xl font-bold font-urban">{config.contact__info_title}</h4>
              <div className="space-y-2">
                {config.contact__info_phone_numbers.map(phone => (
                  <div key={phone} className="space-x-3 flex">
                    <Icons.phone className="size-5 text-muted-foreground" />
                    <Link href={`tel:${phone}`}><span className="tracking-wider">{phone} </span></Link>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {config.contact__info_emails.map(email => (
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
                {config.contact__info_socials.map(social => {
                  let Icon = Icons[social.icon as keyof typeof Icons]
                  if (social.icon === "google") {
                    Icon = Icons.google
                  } else if (social.icon === "facebook") {
                    Icon = Icons.facebook
                  } else if (social.icon === "x") {
                    Icon = Icons.x
                  }

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
            <Card className="p-7">
              <div className="space-y-5">
                {config.contact__info_addresses.map(addr => (
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
            <ContactMap embedUrl={config.contact__info_map_embed_url} className="hidden h-[400px] min-[1080px]:block" />
          </div>
        </div>
        <div className="min-[1080px]:hidden mt-20">
          <ContactMap embedUrl={config.contact__info_map_embed_url} className="h-[400px]" />
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
