import {defineArrayMember, defineField, defineType} from "sanity";
import {DocumentTextIcon} from "@sanity/icons";
import {imageField, langField, stringField} from "@/sanity/schemaTypes/utils";

export interface ContactPageSettingsType {
  lang: string,
  hero: {
    hero__header_title: string
    hero__header_subText: string
    hero__cover_img: {
      img_url: string,
      alt: string
    }
  }
  contact: {
    contact__section_title: string
    contact__info_title: string
    contact__info_addresses: ContactDigitalAddress[]
    contact__info_phone_numbers: string[]
    contact__info_emails: string[]
    contact__info_socials: SocialMediaProfile[]
    contact__info_map_embed_url: string
  }
}

export interface ContactDigitalAddress {
  address: string,
  gps_address: string
}

export interface SocialMediaProfile {
  name: string
  icon: string
  profile_url: string
}

export const contactPageSettingsType = defineType({
  name: 'contact_page_settings',
  title: 'Contact Page Settings',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    langField(),
    stringField('hero__header_title'),
    stringField('hero__header_subText'),
    imageField("hero__coverImg"),

    stringField("contact__section_title"),

    stringField("contact__info_title"),
    defineField({
      name: 'contact__info_addresses',
      type: 'array',
      title: 'Main Contact Office Locations',
      of: [defineArrayMember({ type: 'reference', to: { type: 'digital_address' } })]
    }),

    defineField({
      name: 'contact__info_phone_numbers',
      type: 'array',
      title: 'Main Contact Phone Numbers',
      of: [defineArrayMember({ type: 'string' })]
    }),

    defineField({
      name: 'contact__info_emails',
      type: 'array',
      title: 'Main Contact Email Addresses',
      of: [defineArrayMember({ type: 'email' })]
    }),

    defineField({
      name: 'contact__info_socials',
      type: 'array',
      title: 'Social Media Profiles',
      of: [defineArrayMember({ type: 'reference', to: { type: 'social_media_profile' } })]
    }),
    stringField("contact__info_map_embed_url"),

  ],
  preview: {
    select: {
      title: 'hero__header_title',
      subtitle: 'lang',
      media: 'hero__coverImg',
    },
  }
});