import MaxWidthWrapper from "@/components/shared/max-width-wrapper"
import { ArticleType } from "./related"
import { ArticleCard } from "./article-card"

export function CategoryArticles({ articles }: { articles: ArticleType[] }) {

    if (articles.length === 0) return null

    return (
        <section className="py-16 bg-gray-50">
            <MaxWidthWrapper className="mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <ArticleCard key={index} article={article} />
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    )
}