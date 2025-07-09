import React from 'react';
import {Tr} from "@/types";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {AboutPageSettingsType} from "@/sanity/schemaTypes/settings/aboutPageSettingsType";
import {Card} from "@/components/ui/card";
import Image from "next/image";
import {HeaderSection} from "@/components/shared/header-section";

export default function AboutBoDSection ({ t, config }: { t: Tr, config: AboutPageSettingsType['bod'] }) {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-zinc-300/10 via-yellow-100/10 to-gray-100/40">
      <MaxWidthWrapper className="space-y-12">
        <div className="">
          <HeaderSection
            title={config.bod__bod_title}
            subtitle={config.bod__bod_subText}
          />
        </div>
        <div className="grid grid-col-1 md:grid-cols-3 gap-20">
          {config.bod__bod_members.map((m, i) => (
            <Card key={i}>
              <Image
                src={m.headshot.img_url}
                alt={m.headshot.alt}
                width={1000}
                height={1000}
                style={{ width: '100%', height: 'auto'}}
                className="rounded-t-xl"
              />
              <div className="px-3 py-3">
                <h4 className="card-title">{m.name}</h4>
                {m.role && (
                  <p className="card-text">{m.role}</p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

