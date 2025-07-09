import {defineArrayMember, defineField, defineType} from "sanity";
import {DocumentTextIcon} from "@sanity/icons";
import {imageField, langField, stringField} from "@/sanity/schemaTypes/utils";

interface HomeNewsArticle {
  slug: string
  cover_url: string,
  coverImgAlt: string
  title: string,
  description: string,
  date: string,
  category: string,
}

type BlogBody = string;

export interface BlogArticleType {
  lang: string,
  title: string
  cover_img: {
    img_url: string
    alt: string
  }
  description: string
  category: string[]
  body: BlogBody[]
  created_at: string|Date
  published_at: string|Date
  tags: string[]
  businesses: string[]
}

export const blogArticlesType = defineType({
  name: 'blog_article',
  title: 'Blog Article',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    langField(),
    stringField('title'),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    imageField('coverImg'),
    stringField('description'),
    defineField({
      name: 'category',
      type: 'reference',
      to: {type: 'category'}
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
    defineField({
      name: 'created_at',
      type: 'datetime',
    }),
    defineField({
      name: 'published_at',
      type: 'datetime',
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [defineArrayMember({ type: 'string'})]
    }),
    defineField({
      name: 'businesses',
      type: 'array',
      of: [defineArrayMember({ type: 'business_company' })]
    })
  ],
  initialValue: () => ({
    created_at: (new Date()).toISOString()
  })
});