import Link from "next/link";
import { ArticleType } from "./related";
import Image from "next/image";



export function ArticleCard({ article, className }: { article: ArticleType, className?: string }) {
    return (
        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Article Image */}
        <div className="aspect-w-16 aspect-h-9 relative">
            <Image
                src={article.cover_img.img_url}
                alt={article.cover_img.alt}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
            />
            <span className="absolute bottom-5 left-5 bg-primary/70 text-white px-5 py-2 rounded-full font-bold text-xs z-1">
                {article.category.title}
            </span>
        </div>
        
        <div className="p-6">
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                <Link href={`/blogs/${article.category.slug}/${article.slug}`}>
                    {article.title}
                </Link>
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 mb-4 line-clamp-2">
                {article.description}
            </p>
            
            {/* Date */}
            <time className="text-sm text-gray-500">
                {new Date(article.published_at).toLocaleDateString()}
            </time>
        </div>
    </article>
    )
}