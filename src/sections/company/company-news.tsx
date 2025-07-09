import React from "react";
import {CompanyPageSettingsType, HomeNewsArticle} from "@/types/sitesettings";
import {Tr} from "@/types";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {HeaderSection} from "@/components/shared/header-section";
import BlogArticleCard from "@/sections/news-article/blog-article-card";

export function CompanyNews  ({ t, config, articles }: {
  t: Tr,
  config: CompanyPageSettingsType['news'],
  articles: HomeNewsArticle[]
}) {

  return (
    <section className="py-12 md:py-20">
      <MaxWidthWrapper className="space-y-12">
        <HeaderSection
          title={config.news__header_title}
          subtitle={config.news__header_subTitle}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {articles.map(article => (
            <BlogArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}