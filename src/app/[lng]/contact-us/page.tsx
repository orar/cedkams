import React from 'react';
import {ContactHero} from "@/sections/contact/hero";
import {ContactSection} from "@/sections/contact/contact";
import {fallbackLng, languages} from "@/i18n/settings";
import {splitAsGroups} from "@/models/posts";
import {getContactPageConfig, getNewsPageConfig} from "@/models/queries";
import { useTranslation } from '@/i18n'
import {BaseServerProps} from "@/types";


export default async function Page ({ params }: BaseServerProps) {
  let { lng } = await params
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'landing')
  const cfg = splitAsGroups(await getContactPageConfig(lng))

  if (!cfg) {
    return <div></div>
  }

  return (
    <>
      <ContactHero t={t} config={cfg.hero} />
      <ContactSection t={t} config={cfg.contact} />
    </>
  );
};

