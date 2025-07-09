import {HomeNewsArticle} from "@/types/sitesettings";
import Image from "next/image";
import Link from "next/link";
import {format} from "date-fns";
import React from "react";
import {cn} from "@/lib/utils";


export default function BlogArticleCard ({ article, className }: { article: HomeNewsArticle, className?: string }) {

  return (
    <div key={article.slug} className={cn("rounded-lg max-w-sm", className)}>
      <Image
        src={article.cover_img.img_url}
        alt={article.cover_img.alt}
        width={1000}
        height={1000}
        style={{ width: '100%', height: 200}}
        className="rounded-xl transition-all duration-300 fade-in"
      />
      <div className="p-3 max-w-sm">
        <h4 className="font-geist font-semibold text-xl truncate">
          <Link href={`/blogs/${article.category.slug}/${article.slug}`}>
            {article.title}
          </Link>
        </h4>
        <div className="h-12 my-3 overflow-hidden text-ellipsis">
          <Link href={`/blogs/${article.category.slug}/${article.slug}`}>
            <p className="">{article.description}</p>
          </Link>
        </div>
        <div className=" text-sm">
                  <span className="pr-3 border-r-2">
                    {format(new Date(article.published_at), "dd/MM/yyyy")}
                  </span>
          <div className="inline ml-3">
            <Link href={`/blogs/${article.category.slug}`}>
              {article.category.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}