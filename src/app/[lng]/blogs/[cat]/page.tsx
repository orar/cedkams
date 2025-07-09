import { getCategoryArticles } from "@/models/queries"
import { CategoryArticles } from "@/sections/news-article/category-articles"
import LatestArticle from "@/sections/news-article/latest"


export default async function Page({ params }: { params: Promise<{ cat: string, lng: string }> }) {
    let { lng, cat } = await params
    const [main, ...articles] = await getCategoryArticles(lng, cat)

    return (
        <>
            <LatestArticle article={main} />
            <CategoryArticles articles={articles} />
        </>
    )
}

