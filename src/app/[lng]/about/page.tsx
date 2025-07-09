import React from 'react';
import {fallbackLng, languages} from "@/i18n/settings";
import {splitAsGroups} from "@/models/posts";
import {getAboutPageConfig, getNewsPageConfig} from "@/models/queries";
import {BaseServerProps} from "@/types";
import { useTranslation } from '@/i18n'
import AboutHero from "@/sections/about/hero";
import AboutMainSection from "@/sections/about/about";
import AboutBoDSection from "@/sections/about/bod";
import AboutCSRSection from "@/sections/about/csr";
import AboutVision from "@/sections/about/vision";

export default async function Page({ params }: BaseServerProps){
  let { lng } = await params
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'landing')
  const cfg = splitAsGroups(await getAboutPageConfig(lng))

  if (!cfg) {
      return <div></div>
  }

  return (
    <>
      <AboutHero t={t} config={cfg.hero} />
      <AboutMainSection t={t} config={cfg.about} />
      <AboutBoDSection t={t} config={cfg.bod} />
      <AboutCSRSection t={t} config={cfg.csr}/>
      <AboutVision config={cfg.vision} t={t} coreValues={cfg.core_values} />
    </>
  );
};

