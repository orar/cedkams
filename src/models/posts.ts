import { groq } from "next-sanity"

import { client } from "@/sanity/lib/client"

export async function getPosts(lng: string) {
  // ! https://www.sanity.io/docs/query-cheat-sheet
  const query = groq`*[_type == "post"]`

  const posts = await client.fetch(query)

  return posts
}


export function splitAsGroups<T = any>(data: { [key: string]: any }): T|Partial<T> {
  if (!data) {
    return {}
  }

  try {
      let keys = Object.keys(data)

    return keys.reduce((acc, key) => {
      const [_1 , _2] = key.split("__")
      if (!_2) {
        acc[key] = data[key];
        return acc
      }

      if (!acc[_1]) {
        acc[_1] = {};
      }

      acc[_1][key] = data[key]

      return acc
    }, {} as {[key: string]: { [key: string]: any }}) as T;
  } catch (error) {
    console.error(error)
    return {}
  }
}