import {defineArrayMember, defineField, defineType} from "sanity";
import {BulbOutlineIcon, DocumentTextIcon, ListIcon} from "@sanity/icons";
import {HeroCarousel, PartnerLogo, ProductItemType, ServiceItemType} from "@/types/sitesettings";
import {imageField, langField, slugField, stringField} from "@/sanity/schemaTypes/utils";
import {ContactDigitalAddress, SocialMediaProfile} from "@/sanity/schemaTypes/settings/contactPageSettingsType";

export interface CompanyPageSettingsType {
  company_name: string,
  lang: string,
  hero: {
    hero__logo_url: string
    hero__logo_alt: string
    hero__header_title: string
    hero__header_preword: string
    hero__statement: string[]
    hero__cover_url: string
    hero__cover_alt: string
    hero__carousel: HeroCarousel[]
  },
  contact: {
    contact__section_title: string
    contact__info_title: string
    contact__info_addresses: ContactDigitalAddress[]
    contact__info_phone_numbers: string[]
    contact__info_emails: string[]
    contact__info_socials: SocialMediaProfile[]
  },
  milestones: {
    milestones__partner_logos: PartnerLogo
  },
  services: {
    services__services_title: string,
    services__services: ServiceItemType[]
  }
  products: {
    products__products_title: string,
    products__products: ProductItemType[]
  },
  news: {
    news__header_title: string,
    news__header_subTitle: string,
  }
}


export const companyPageSettingsType = defineType({
  name: 'company_page_settings',
  title: 'Company Page Settings',
  type: 'document',
  icon: BulbOutlineIcon,
  fields: [
    langField(),
    stringField('company_name'),
    stringField('slug', 'company_name'),
    imageField('hero__logoImg'),
    stringField('hero__header_title'),
    stringField('hero__header_preword'),
    imageField('hero__coverImg'),

    defineField({
      name: 'hero__statement',
      title: 'Company Statement',
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
      name: 'hero__carousel',
      title: 'Company Gallery Images',
      type: 'array',
      of: [defineArrayMember({
        type: 'image',
        fields: [{
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
          }]
      })],
    }),

    stringField("contact__info_title"),
    defineField({
      name: 'contact__info_addresses',
      type: 'array',
      title: 'Contact Office Locations',
      of: [defineArrayMember({ type: 'reference', to: { type: 'digital_address' } })]
    }),
    defineField({
      name: 'contact__info_phone_numbers',
      type: 'array',
      title: 'Contact Phone Numbers',
      of: [defineArrayMember({ type: 'string' })]
    }),
    defineField({
      name: 'contact__info_emails',
      type: 'array',
      title: 'Contact Email Addresses',
      of: [defineArrayMember({ type: 'email' })]
    }),
    defineField({
      name: 'contact__info_socials',
      type: 'array',
      title: 'Social Media Profiles',
      of: [defineArrayMember({ type: 'reference', to: { type: 'social_media_profile' } })]
    }),

    defineField({
      name: 'milestones__partner_logos',
      type: 'array',
      title: 'Partner Logos',
      of: [defineArrayMember({type: 'reference', to: {type: 'partner_logo'}})],
    }),

    stringField('services__services_title', 'Services Section Heading'),
    defineField({
      name: 'services__services',
      type: 'array',
      icon: ListIcon,
      title: 'List of Services',
      of: [defineArrayMember({ type: 'reference', to: { type: 'company_service' }})]
    }),

    stringField('products__products_title', 'Products Section Heading'),
    defineField({
      name: 'products__products',
      type: 'array',
      icon: ListIcon,
      title: 'List of Products',
      of: [defineArrayMember({ type: 'reference', to: { type: 'company_product' }})]
    }),

    stringField('news__header_title'),
    stringField('news__header_subTitle'),
  ],
  preview: {
    select: {
      title: 'company_name',
      lang: 'lang',
      media: 'hero__logoImg'
    },
    prepare(res) {
      return {
        title: `${String(res.lang || '').toUpperCase()} | ${res.title}`,
        media: res.media
      }
    }
  }
})