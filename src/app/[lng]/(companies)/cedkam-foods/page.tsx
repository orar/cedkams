import React from 'react';
import { fallbackLng, languages } from '@/i18n/settings';
import { useTranslation } from '@/i18n';
import {getCompanyPageConfig} from "@/models/queries";
import { BaseServerProps } from '@/types';
import { CompanyHero } from '@/sections/company/company-hero';
import { CompanyGallery } from '@/sections/company/company-gallery';
import { CompanyServices } from '@/sections/company/company-services';
import { splitAsGroups } from '@/models/posts';
import { CompanyProducts } from '@/sections/company/company-products';
import { CompanyNews } from '@/sections/company/company-news';
import { CompanyPageSettingsType } from '@/types/sitesettings';


export default async function Page({ params }: BaseServerProps) {
  let { lng } = await params
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'landing')
  const conf = await getCompanyPageConfig(lng, 'cedkam-foods')
  const company = splitAsGroups<CompanyPageSettingsType>(conf.company)

  return (
    <>
      <CompanyHero t={t} config={company.hero!} contact={company.contact!} name={company.company_name!} />
      <CompanyGallery t={t} config={company.hero!} />
      {company.services?.services__services && (
        <CompanyServices t={t} config={company.services!} email={company.contact!.contact__info_emails[0]} />
      )}
      {!!company.products?.products__products && (
        <CompanyProducts t={t} config={company.products!} email={company.contact!.contact__info_emails[0]} />
      )}
      <CompanyNews t={t} config={company.news!} articles={conf.articles} />
    </>
  );
};
