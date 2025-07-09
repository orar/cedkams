import React from 'react';
import {CompanyHero} from "@/sections/company/company-hero";
import {CompanyNews} from "@/sections/company/company-news";
import {getCompanyPageConfig} from "@/models/queries";
import {fallbackLng, languages} from "@/i18n/settings";
import {splitAsGroups} from "@/models/posts";
import { useTranslation } from '@/i18n'
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import {ReadonlyURLSearchParams} from "next/navigation";
import {CompanyServices} from "@/sections/company/company-services";
import {CompanyProducts} from "@/sections/company/company-products";
import {CompanyGallery} from "@/sections/company/company-gallery";
import { BaseServerProps } from '@/types';
import { CompanyPageSettingsType } from '@/types/sitesettings';





const Page = async ({ params }: BaseServerProps) => {
  let { lng } = await params
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'landing')
  const conf = await getCompanyPageConfig(params.lng, 'cedkam-capital')
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

export default Page;


