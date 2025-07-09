import {defineArrayMember, defineField, defineType} from "sanity";
import {DocumentTextIcon, UsersIcon, LinkIcon, TranslateIcon, BulbFilledIcon} from "@sanity/icons";
import {imageField, slugField, stringField} from "@/sanity/schemaTypes/utils";

export const langType = defineType({
  name: 'lang',
  title: "Language",
  icon: TranslateIcon,
  type: "document",
  fields: [
    defineField({
      name: "language",
      type: "string",
      options: {
        list: [
          {title: 'English', value: 'en'},
          {title: 'French', value: 'fr'}
        ]
      }
    }),
  ],
 /* preview: {
    select: {
      title: '',
    },
  }*/
})

export const coreValueTagType = defineType({
  name: 'core_value_tag',
  title: 'Core Value Tag',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    stringField('tag'),
    stringField('icon'),
  ]
})


export const coreBoDMemberType = defineType({
  name: 'core_bod_member',
  title: 'Core BoD Member',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    imageField('headshot'),
    stringField('name'),
    stringField('role'),
  ]
})

export const operationCompanyItemType = defineType({
  name: 'operation_company_item',
  title: 'Operation Company Item',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
    }),
    imageField('coverImg'),
    stringField('title'),
    stringField('description'),
  ]
})

export const businessCompanyType = defineType({
  name: 'business_company',
  title: 'Business Company',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Business Name',
      type: 'string',
      options: {
        list: [
          { title: 'Cedkam Capital', value: 'cedkam-capital'},
          { title: 'Cedkam Logistics', value: 'cedkam-logistics'},
          { title: 'Cedkam Foods', value: 'cedkam-foods'},
          { title: 'Cedkam Energy', value: 'cedkam-energy'},
        ]
      }
    })
  ]
})

export const homeNewsArticle = defineType({
  name: 'home_news_article',
  title: 'Home News Article',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
    }),
    imageField('coverImg'),
    stringField('title'),
    defineField({
      name: 'category',
      type: 'reference',
      to: {type: 'category'}
    }),
    defineField({
      name: 'date',
      type: 'datetime',
    }),
  ]
});

export const partnerLogoType = defineType({
  name: 'partner_logo',
  title: 'Partner Logo',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    stringField('name'),
    imageField('logo_url')
  ]
})


export const digitalAddressType = defineType({
  name: 'digital_address',
  title: 'Digital Address',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    stringField('address'),
    stringField('gps_address', 'GhanaPost GPS (GA-1110-1110)')
  ]
})


export const socialMediaProfileType = defineType({
  name: 'social_media_profile',
  title: 'Social Media Profile',
  type: 'document',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'platform',
      type: 'reference',
      to: { type: 'social_media_platform'}
    }),
    defineField({
      name: 'profile_url',
      title: 'Profile URL',
      type: 'url'
    }),
  ],
  preview: {
    select: {
      title: 'platform.name'
    }
  }
})

export const socialMediaPlatformType = defineType({
  name: "social_media_platform",
  title: "Social Media Platform",
  type: 'document',
  fields: [
    stringField('icon'),
    stringField('name'),
  ]
})



export const companyProductType = defineType({
  name: "company_product",
  title: "Company Product",
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
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

  ]
})
