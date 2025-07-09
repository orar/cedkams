'use client'

import {Tr} from "@/types";
import {NewsPageSettings} from "@/types/sitesettings";
import React from "react";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";
import {format} from "date-fns";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/client";

export default  function LatestArticle({ article }: { article: NewsPageSettings['latest'] }) {
  // const { t } = useTranslation('news')
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-24 px-5"
    >
      <MaxWidthWrapper
        className="relative rounded-2xl bg-cover h-[60dvh]"
        style={{ backgroundImage: `url(${article.cover_img.img_url})` }}
      >
       <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.8, delay: 0.3 }}
         className="flex rounded-2xl absolute z-1 top-0 left-0 bottom-0 right-0 bg-gradient-to-b from-zinc-200/30 via-gray-300/40 via-gray-700/60 to-gray-900/70"
       >
         <div className="self-end max-w-3xl px-7 py-5 text-white ">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.6 }}
             className="mb-3 uppercase"
           >
             <Link href={`/blogs/${article.category.slug}`}>
               {article.category.title}
             </Link>
           </motion.div>
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.8 }}
             className="font-heading capitalize text-3xl md:text-5xl text-white"
           >
             <Link href={`/news/${article.slug}`}>
               {article.title}
             </Link>
           </motion.h1>

           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 1 }}
             className="text-lg text-gray-100 underline my-5"
           >
             <Link href={`/blogs/${article.category.slug}/${article.slug}`}>
               {article.description}
             </Link>
           </motion.p>
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 1.2 }}
             className="flex flex-wrap mt-2"
           >
             <div className="">
               {format(new Date(article.published_at), "MMMM dd, yyyy")}
             </div>
             <div className="mr-10"></div>
             {article.businesses.map(b => {
               const c = b.replace('-', ' ').replace('_', ' ');
               return (
                 <span key={b} className="mr-3">
                   <Link href={`/blogs/ops/${b}`}>
                     <Badge className="capitalize rounded-full">{c}</Badge>
                   </Link>
                 </span>
               )
             })}
           </motion.div>
         </div>
       </motion.div>
      </MaxWidthWrapper>
    </motion.section>
  )
}

