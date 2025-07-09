import React from 'react';
import {fallbackLng, languages} from "@/i18n/settings";
import {splitAsGroups} from "@/models/posts";
import {getBlogArticles} from "@/models/queries";
import {BaseServerProps} from "@/types";
import { useTranslation } from '@/i18n'
import Top10Articles from "@/sections/news-article/top-10";
import LatestArticle from "@/sections/news-article/latest";
import { HomeNewsArticle } from '@/types/sitesettings';


export default async function Page ({params}: BaseServerProps){
  let { lng } = await params
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'landing')
  const cfg = splitAsGroups(await getBlogArticles(lng))

  if (!cfg.latest) {
    return <div>{t("no_articles_found")}</div>
  }

  return (
    <>
      <LatestArticle article={cfg.latest as HomeNewsArticle} />
      <Top10Articles t={t} articles={cfg.top10 as HomeNewsArticle[]} />
    </>
  );
};


