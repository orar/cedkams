import {defineArrayMember, defineField, defineType} from "sanity";
import {DocumentTextIcon} from "@sanity/icons";
import {imageField, langField, stringField} from "@/sanity/schemaTypes/utils";
import {CoreValueTag} from "@/types/sitesettings";

export interface AboutPageSettingsType {
  lang: string
  hero: {
    hero__hero_title: string
    hero__hero_subTitle: string,
    hero__cover_img: {
      img_url: string,
      alt: string
    }
  }
  about: {
    about__about_title: string
    about__about_quote: string
    about__about_statement: string[]
    about__about_media_coverImg: {
      img_url: string
      alt: string
    }
  }
  vision: {
    vision__vision_title: string,
    vision__vision_statement: string[]
    vision__vision_gallery: {
      img_url: string
      alt: string
    }[]
  },
  core_values: {
    core_values__title: string
    core_values__statement: string[]
    core_values__tags: CoreValueTag[]
  }
  bod: {
    bod__bod_title: string
    bod__bod_subText: string
    bod__bod_members: {
      name: string
      role: string
      headshot: {
        img_url: string
        alt: string
      }
    }[]
  }
  csr: {
    csr__csr_title: string
    csr__csr_statement: string[]
    csr__csr_gallery: {
      img_url: string
      alt: string
    }[]
  }
}

export const aboutPageSettingsType = defineType({
  name: 'about_page_settings',
  title: 'About Page Settings',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    langField(),
    stringField("hero__hero_title"),
    stringField("hero__hero_subTitle"),
    imageField("hero__coverImg"),

    stringField("about__about_title"),
    stringField("about__about_quote"),
    defineField({
      name: 'about__about_statement',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        }),
      ],
    }),
    imageField("about__about_media_coverImg"),

    stringField("vision__vision_title"),
    defineField({
      name: 'vision__vision_statement',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        }),
      ],
    }),
    defineField({
      name: 'vision__vision_gallery',
      type: 'array',
      title: 'Vision/Mission Media Images',
      of: [defineArrayMember({
        type: 'image',
        fields: [{
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
        }]
      })]
    }),

    stringField("core_values__title"),
    defineField({
      name: 'core_values__statement',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        }),
      ],
    }),
    defineField({
      name: 'core_values__tags',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: {type: 'core_value_tag'}})]
    }),

    stringField("bod__bod_title", 'Board of Directors Section Title'),
    stringField("bod__bod_subText", 'Board of Directors Section Sub-Text'),
    defineField({
      name: 'bod__bod_members',
      type: 'array',
      title: 'Board of Directors Members',
      of: [defineArrayMember({ type: 'reference', to: {type: 'core_bod_member'}})]
    }),

    stringField("csr__csr_title", "Corporate Social Responsibility Title"),
    defineField({
      name: 'csr__csr_statement',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        }),
      ],
    }),
    defineField({
      name: 'csr__csr_gallery',
      type: 'array',
      title: 'CSR Gallery Images',
      of: [defineArrayMember({
        type: 'image',
        fields: [{
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }]
      })]
    }),
  ],
  preview: {
    select: {
      title: 'hero__hero_title',
      subtitle: 'lang',
      media: 'about__about_media_coverImg',
    },
  }
});