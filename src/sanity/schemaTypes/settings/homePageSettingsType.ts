import {UserIcon, DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'
import {langField, numberField, stringField} from "@/sanity/schemaTypes/utils";

export const homePageSettingsType = defineType({
  name: 'homepage_settings',
  title: 'HomePage Settings',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    langField(),
    stringField('hero__header_title'),
    stringField('hero__header_subText'),
    defineField({
      name: 'hero__carousel',
      type: 'array',
      of: [defineArrayMember({
        type: 'image',
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
          }
        ]
      })],
    }),

    stringField('mission__header_title'),
    stringField('mission__header_subText'),
    stringField('mission__statement_title'),
    defineField({
      name: 'mission__statement_text',
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
      name: 'mission__statement_value_tags',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'core_value_tag'}})],
    }),
    defineField({
      name: 'mission__gallery',
      type: 'array',
      of: [defineArrayMember({
        type: 'image',
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
          }
        ]
      })],
    }),

    stringField('operations__header_title'),
    stringField('operations__header_label'),
    defineField({
      name: 'operations__companies',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'operation_company_item'}})],
    }),

    stringField('news__header_label'),
    stringField('news__header_title'),
    stringField('news__header_subTitle'),
    defineField({
      name: 'news__articles',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'home_news_article'}})],
    }),

    numberField('milestones__assets'),
    numberField('milestones__partners'),
    numberField('milestones__clients_count'),
    stringField('milestones__clients_statement'),
    defineField({
      name: 'milestones__partner_logos',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'partner_logo'}})],
    }),
  ],
  preview: {
    select: {
      title: 'hero__header_title',
      subtitle: 'lang',
      media: 'hero__carousel[0].asset->url',
    },
  },
})
