import {Tr} from "@/types";
import {HomeLandingPageSettings, HomeNewsArticle} from "@/types/sitesettings";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {HeaderSection} from "@/components/shared/header-section";
import BlogArticleCard from "@/sections/news-article/blog-article-card";

export function News({ t, config, articles }: { t: Tr, config: HomeLandingPageSettings['news'], articles: HomeNewsArticle[] }) {

  return (
    <section className="py-12 md:py-20">
      <MaxWidthWrapper className="space-y-12">
        <HeaderSection
          title={config.news__header_title}
          subtitle={config.news__header_subTitle}
          label={config.news__header_label}
        />
        <div className="grid grid-cols-1 pt-8 md:grid-cols-3 gap-12">
          {articles.map(article => (
            <BlogArticleCard 
              key={article.slug} 
              article={article} 
              className="max-md:mx-auto transition-all duration-300 slide-in"
            />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}