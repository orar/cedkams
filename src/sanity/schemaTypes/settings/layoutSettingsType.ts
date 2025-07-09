import {defineType} from "sanity";
import {DocumentTextIcon} from "@sanity/icons";
import {imageField, stringField} from "@/sanity/schemaTypes/utils";

export const layoutSettingsType = defineType({
  name: 'layout_settings',
  title: 'Layout Settings',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    stringField("main_name"),
    imageField("logo"),
    imageField("dark_logo"),
  ]
})