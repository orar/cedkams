import React from 'react';
import { Tr } from "@/types";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { AboutPageSettingsType } from "@/sanity/schemaTypes/settings/aboutPageSettingsType";

export default function AboutMainSection({ t, config }: { t: Tr, config: AboutPageSettingsType['about'] }) {
  return (
    <section className="relative py-24 overflow-hidden">
      <MaxWidthWrapper>
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
          <div className="flex-1 space-y-6">
            <h1 className="font-geist text-5xl md:text-6xl font-bold text-red-600">
              {config.about__about_title}
            </h1>
            <blockquote className="text-xl md:text-2xl italic text-gray-500 border-l-4 border-red-600 pl-6 bg-red-50/30 rounded-lg shadow-sm">
              {config.about__about_quote}
            </blockquote>
          </div>
          <div className="flex-1">
            <Card className="overflow-hidden rounded-xl shadow-lg transform hover:scale-[1.03] transition-transform duration-300">
              <Image
                src={config.about__about_media_coverImg.img_url}
                alt={config.about__about_media_coverImg.alt}
                width={1000}
                height={1000}
                className="aspect-[4/3] object-cover"
                style={{ width: '100%', height: 'auto' }}
              />
            </Card>
          </div>
        </div>

        {/* Statement Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-red-50 to-white -z-10 rounded-xl" />
          <div className="max-w-3xl py-6 mx-auto space-y-6 prose prose-lg dark:prose-invert">
            {config.about__about_statement.map((s, i) => (
              <p key={i} className="text-lg leading-relaxed">
                {s}
              </p>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 w-[200px] h-[200px] bg-red-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-red-100/10 rounded-full blur-3xl" />
    </section>
  );
}

