import { getRelatedBlogArticles, findBlogArticle } from "@/models/queries"
import { Article } from "@/sections/news-article/article"
import { RelatedArticles } from "@/sections/news-article/related"


export default async function BlogArticlePage({ params }: { params: Promise<{ cat: string, slug: string, lng: string }> }) {
    let { lng, cat, slug } = await params
    const article = await findBlogArticle(lng, slug)
    const articles = await getRelatedBlogArticles(lng, slug)

    return (
        <>
            <Article article={article} />
            <RelatedArticles articles={articles} />
        </>
    )
}
