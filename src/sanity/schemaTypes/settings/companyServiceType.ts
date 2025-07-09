import {defineArrayMember, defineField, defineType} from "sanity";
import {BulbFilledIcon} from "@sanity/icons";
import {imageField, slugField, stringField} from "@/sanity/schemaTypes/utils";


export const companyServiceType = defineType({
  name: "company_service",
  title: "Company Service",
  type: 'document',
  icon: BulbFilledIcon,
  fields: [
    stringField('lang'),
    stringField('name'),
    slugField('slug', 'name'),
    imageField("coverImg"),
    stringField("description"),
    defineField({
      name: 'content',
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
      name: 'gallery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }
          ]
        })
      ]
    }),
  ],
  preview: {
    select: {
      name: 'name',
      lang: 'lang',
      img: 'coverImg'
    },
    prepare(res) {
      return {
        title: `${String(res.lang || '').toUpperCase()} | ${res.name}`,
        media: res.img
      }
    }
  }
})