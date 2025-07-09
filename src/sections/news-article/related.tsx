import MaxWidthWrapper from "@/components/shared/max-width-wrapper"
import Link from "next/link"
import Image from "next/image"
import { ArticleCard } from "./article-card"

export type ArticleType = {
    slug: string
    cover_img: {
        img_url: string
        alt: string
    }
    category: {
        title: string
        slug: string
    }
    title: string
    published_at: string
    description: string
}

type Props = {
    articles: {
        slug: string
        cover_img: {
            img_url: string
            alt: string
        }
        category: {
            title: string
            slug: string
        }
        title: string
        published_at: string
        description: string
    }[]
}

export function RelatedArticles({ articles }: Props) {
    return (
        <section className="py-16 bg-gray-50">
            <MaxWidthWrapper className="mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <ArticleCard key={index} article={article} />
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    )
}
