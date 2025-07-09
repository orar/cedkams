import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {
  partnerLogoType,
  coreValueTagType,
  operationCompanyItemType,
  homeNewsArticle,
  langType,
  coreBoDMemberType,
  digitalAddressType,
  socialMediaProfileType,
  socialMediaPlatformType,
  businessCompanyType
} from './settings/partials'
import {homePageSettingsType} from "@/sanity/schemaTypes/settings/homePageSettingsType";
import {companyPageSettingsType} from "@/sanity/schemaTypes/settings/companyPageSettingsType";
import {blogArticlesType} from "@/sanity/schemaTypes/settings/blogArticlesType";
import {aboutPageSettingsType} from "@/sanity/schemaTypes/settings/aboutPageSettingsType";
import {contactPageSettingsType} from "@/sanity/schemaTypes/settings/contactPageSettingsType";
import {layoutSettingsType} from "@/sanity/schemaTypes/settings/layoutSettingsType";
import {companyServiceType} from "@/sanity/schemaTypes/settings/companyServiceType";
import {companyProductType} from "@/sanity/schemaTypes/settings/companyProductType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    layoutSettingsType,
    blockContentType,
    categoryType,
    postType,
    authorType,
    partnerLogoType, coreValueTagType, operationCompanyItemType, homeNewsArticle,
    langType, coreBoDMemberType, digitalAddressType, socialMediaProfileType, socialMediaPlatformType, businessCompanyType,
    homePageSettingsType,
    companyPageSettingsType,
    blogArticlesType,
    aboutPageSettingsType,
    contactPageSettingsType,
    companyServiceType,
    companyProductType
  ],
}
