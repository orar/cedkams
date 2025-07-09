import { CategoryArticles } from "@/sections/news-article/category-articles"
import { getOpsArticles } from "@/models/queries"
import { fallbackLng } from "@/i18n/settings"
import { languages } from "@/i18n/settings"
import LatestArticle from "@/sections/news-article/latest"

export default async function Page({ params }: { params: Promise<{ op: string, lng: string }> }) {
    let { lng, op } = await params
    if (languages.indexOf(lng) < 0) lng = fallbackLng

    const [main, ...articles] = await getOpsArticles(lng, op)

    return (
        <>
            <LatestArticle article={main} />
            <CategoryArticles articles={articles} />
        </>
    )
}