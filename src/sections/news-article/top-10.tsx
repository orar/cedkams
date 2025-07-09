import {Tr} from "@/types";
import {NewsPageSettings} from "@/types/sitesettings";
import React from "react";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import BlogArticleCard from "@/sections/news-article/blog-article-card";

export default function Top10Articles({ t, articles }: { t: Tr, articles: NewsPageSettings['top10'] }) {

  return (
    <section className="py-12">
      <MaxWidthWrapper>
        <div className="grid sm:gap-5 md:gap-12 grid-col-1 sm:grid-cols-2 md:grid-cols-3">
          {articles.map(article => (
            <BlogArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}
