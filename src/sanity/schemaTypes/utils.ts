import {defineField} from "sanity";
import {ImageIcon} from "@sanity/icons";


export function stringField(name: string, title?:string, opts?: any) {
  return defineField({
    name,
    title,
    type: 'string',
  })
}

export function numberField(name: string, opts?: any) {
  return defineField({
    name,
    type: 'number',
  })
}

export function imageField(name: string) {
  return defineField({
    name,
    type: 'image',
    icon: ImageIcon,
    options: {
      hotspot: true,
    },
    fields: [
      {
        name: 'alt',
        type: 'string',
        title: 'Alternative text',
      }
    ]
  })
}

export function langField(name: string = 'lang') {
  return defineField({
    name,
    type: 'string',
    options: {
      list: [
        {title: 'English', value: 'en'},
        {title: 'French', value: 'fr'}
      ]
    }
  })
}

export function slugField(name?: string, source?: string){
  return defineField({
    name: name || 'slug',
    type: 'slug',
    options: {
      source: source || 'title'
    },
  });
}