import React from 'react';
import {Tr} from "@/types";
import {AboutPageSettingsType} from "@/sanity/schemaTypes/settings/aboutPageSettingsType";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {Badge} from "@/components/ui/badge";
import {Icons} from "@/components/shared/icons";
import { HeaderSection } from '@/components/shared/header-section';

export default function AboutVision ({ t, config, coreValues }: {
  t: Tr,
  config: AboutPageSettingsType['vision'],
  coreValues: AboutPageSettingsType['core_values']
}) {

  return (
    <section className="py-20 bg-background">
      <MaxWidthWrapper className="space-y-16">
        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-8 border-l-4 border-red-600 flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <Icons.eye className="text-red-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{config.vision__vision_statement[0]}</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow p-8 border-l-4 border-red-600 flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <Icons.target className="text-red-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{config.vision__vision_statement[1]}</p>
          </div>
        </div>

        {/* Core Pillars */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{coreValues.core_values__title}</h2>
          <div className="mb-8 text-gray-600 dark:text-gray-300">{coreValues.core_values__statement[0]}</div>
          <div className="flex flex-wrap gap-4">
            {coreValues.core_values__tags.map((tag, i) => {
              const Icon = Icons[tag.icon as keyof typeof Icons];
              return (
                <Badge
                  key={`${tag.tag}-${i}`}
                  className="py-3 px-6 text-sm rounded-full border border-red-600 text-gray-900 dark:text-white bg-white dark:bg-zinc-900 flex items-center gap-2"
                  variant="secondary"
                >
                  <span>{tag.tag}</span>
                  <Icon className="text-red-600 size-4" />
                </Badge>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

