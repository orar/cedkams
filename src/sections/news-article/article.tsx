import MaxWidthWrapper from "@/components/shared/max-width-wrapper"
import Link from "next/link"
import Image from "next/image"

type Props = {
    article: {
        cover_img: {
            img_url: string
            alt: string
        }
        category: {
            title: string
            description: string
            slug: string
        }
        title: string
        published_at: string
        description: string
        body: string[]
    }
}

export function Article({ article }: Props) {
    return (
        <section className="py-16">
            <MaxWidthWrapper>
                <div className="container max-w-4xl mx-auto px-4">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="text-primary mb-10">
                            <Link href={`/blogs/${article.category.slug}`}>
                                <span className="bg-primary text-white px-10 py-3 rounded-full font-bold">
                                    {article.category.title}
                                </span>
                            </Link>
                        </div>
                        <h1 className="text-4xl font-bold mb-4">
                            {article.title}
                        </h1>
                        <p className="text-gray-600 mb-4">
                            {new Date(article.published_at).toLocaleDateString()}
                        </p>
                    </div>

                    {/* Cover Image */}
                    <div className="mb-8">
                        <Image 
                            src={article.cover_img.img_url}
                            alt={article.cover_img.alt}
                            width={1000}
                            height={1000}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <p className="text-xl text-gray-700">
                            {article.description}
                        </p>
                    </div>

                    {/* Body Content */}
                    <div className="prose max-w-none">
                        {article.body.map((paragraph, index) => (
                            <p key={index} className="mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}