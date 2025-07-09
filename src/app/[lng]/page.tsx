import { languages, fallbackLng } from '@/i18n/settings'
import { useTranslation } from '@/i18n'
import {ReadonlyURLSearchParams} from "next/navigation";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import {splitAsGroups} from "@/models/posts";
import {HeroLanding} from "@/sections/home/hero";
import {MissionStatement} from "@/sections/home/mission";
import {Operations} from "@/sections/home/operations";
import {News} from "@/sections/home/news";
import {Milestones} from "@/sections/home/milestones";
import {getHomePageConfig} from "@/models/queries";

export type ServerProps = {
  params: Params;
  searchParams:  ReadonlyURLSearchParams;
};

export default async function Home({params}: ServerProps) {
  let { lng } = await params
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng, 'landing')
  const {home, news} = await getHomePageConfig(lng);
  const cfg = splitAsGroups(home)


  return (
    <>
      <HeroLanding t={t} config={cfg.hero} />
      <MissionStatement t={t} config={cfg.mission} />
      <Operations t={t} config={cfg.operations} />
      <Milestones t={t} milestones={cfg.milestones} />
      <News t={t} config={cfg.news} articles={news} />
    </>
  );
}

