import {groq} from "next-sanity";
import {client} from "@/sanity/lib/client";


export async function getHomePageConfig(lang: string) {
  const query = groq`{
      'home': *[_type == "homepage_settings" && lang == "${lang}"]{
          ..., 
          'hero__carousel': hero__carousel[]{alt, 'img_url': asset->url},
          'mission__gallery': mission__gallery[]{alt, 'img_url': asset->url},
          'mission__statement_text': mission__statement_text[].children[].text,
          'operations__companies': operations__companies[]{title,slug},
          'mission__statement_value_tags': mission__statement_value_tags[]->{tag, icon},
          'milestones__partner_logos': milestones__partner_logos[]->{
              name, 
              'alt': logo_url.alt, 
              'logo_url': logo_url.asset->url 
          },
          'operations__companies': operations__companies[]->{
              title,
              description, 
              'slug': slug.current, 
              'cover_alt': coverImg.alt, 
              'cover_url': coverImg.asset->url
          },
      }[0],
      'news': *[_type == "blog_article" && lang == $lang] {
          'lang': lang,
          title,
          'slug': slug.current,
          published_at,
          description,
          'businesses': businesses[].name,
          'cover_img': coverImg{
            'img_url': asset->url,
            'alt': alt
          },
          'tags': tags[].name,
          'category': category->{title, description, 'slug': slug.current}
      } | order(published_at desc)[0...3]
   }`

  return await client.fetch(query, {lang})
}

export async function getCompanyPageConfig(lang: string, company: string) {
  const query = groq`{
    'company': *[_type == "company_page_settings" && lang == "${lang}" && slug == "${company}"]{
      ..., 
      'hero__logo_img': hero__logoImg{
        'img_url': asset->url,
        'alt': alt
      },  
      'hero__carousel': hero__carousel[]{alt, 'img_url': asset->url},
      'contact__info_socials': contact__info_socials[]->{
        profile_url,
        'name': platform->name,
        'icon': platform->icon,
      },
      'hero__statement': hero__statement[].children[].text,
      'contact__info_addresses': contact__info_addresses[]->{address,gps_address},
      'services__services': services__services[]->{
        ...,
        'cover_img': coverImg{alt, 'img_url': asset->url},
        'slug': slug,
        'gallery': gallery[]{alt, 'img_url': asset->url},
        'content': content[].children[].text,
      },
      'products__products': products__products[]->{
        ...,
        'cover_img': coverImg{alt, 'img_url': asset->url},
        'slug': slug,
        'gallery': gallery[]{alt, 'img_url': asset->url},
        'content': content[].children[].text,
      },
    }[0],
    
    'articles': *[_type == "blog_article" && lang == "${lang}" && "${company}" in businesses[].name] {
       'lang': lang,
       title,
       'slug': slug.current,
       published_at,
       description,
       'businesses': businesses[].name,
       'cover_img': coverImg{
          'img_url': asset->url,
          'alt': alt
        },
        'tags': tags[].name,
        'category': category->{title, description, 'slug': slug.current}
    } | order(published_at desc)[0...3]
  }`;

  return await client.fetch(query, { lang, company })
}

export async function getNewsPageConfig(lang: string) {
  const query = groq`*[_type == "blog_article"]{ 
      'latest': ,
      'top10': 
   }`;

  const settings = await client.fetch(query)

  return settings[0]
}

export async function getAboutPageConfig(lang: string) {
  const query = groq`*[_type == "about_page_settings" && lang == "${lang}"]{ 
      ...,
      'hero__cover_img': hero__coverImg{
        'img_url': asset->url,
        'alt': alt
      },  
      'about__about_media_coverImg': about__about_media_coverImg{
        'img_url': asset->url,
        'alt': alt
      },  
     'vision__vision_gallery': vision__vision_gallery[]{
        'img_url': asset->url,
        'alt': alt
      },
      'core_values__tags': core_values__tags[]->{tag, icon},
      'bod__bod_members': bod__bod_members[]->{
        name,
        role,
        'headshot': headshot{alt, 'img_url': asset->url}
      },
      'csr__csr_gallery': csr__csr_gallery[]{
        'img_url': asset->url,
        'alt': alt
      },
      'about__about_statement': about__about_statement[].children[].text,
      'vision__vision_statement': vision__vision_statement[].children[].text,
      'core_values__statement': core_values__statement[].children[].text,
      'csr__csr_statement': csr__csr_statement[].children[].text
   }`;

  const settings = await client.fetch(query, { lang })

  return settings[0]
}

export async function getContactPageConfig(lang: string) {
  const query = groq`*[_type == "contact_page_settings" && lang == "${lang}"]{ 
      ...,
      'lang': lang,
      'hero__cover_img': hero__coverImg{
        'img_url': asset->url,
        'alt': alt
      },
      'contact__info_socials': contact__info_socials[]->{
        profile_url,
        'name': platform->name,
        'icon': platform->icon,
      },
      'contact__info_addresses': contact__info_addresses[]->{address,gps_address},
      contact__info_map_embed_url,
   }`;

  const settings = await client.fetch(query)

  return settings[0]
}


export async function getRecentBlogArticles(lang: string, businesses: string[]) {
  const query = groq`*[_type == "blog_article" && lang == $lang && count((businesses[].name)[@ in $bzs}]) > 0]{ 
      _id,
      'lang': lang,
      title,
      published_at,
      description,
      'businesses': businesses[].name,
      'cover_img': coverImg{
          'img_url': asset->url,
          'alt': alt
        },
      'tags': tags[].name,
      'category': category->{title, description, 'slug': slug.current}
  } | order(published_at desc)[0..2]`;

  return await client.fetch(query, { lang, bzs: businesses})
}


export async function getBlogArticles(lang: string) {
  const query = groq`{
      'latest': *[_type == "blog_article" && lang == "${lang}"]{
          'lang': lang,
          title,
          'slug': slug.current,
          published_at,
          description,
          'businesses': businesses[].name,
          'cover_img': coverImg{
            'img_url': asset->url,
            'alt': alt
          },
          'tags': tags[].name,
          'category': category->{title, description, 'slug': slug.current}
      } | order(published_at desc)[0],
      'top10': *[_type == "blog_article" && lang == "${lang}"] {
          'lang': lang,
          title,
          'slug': slug.current,
          published_at,
          description,
          'businesses': businesses[].name,
          'cover_img': coverImg{
            'img_url': asset->url,
            'alt': alt
          },
          'tags': tags[].name,
          'category': category->{title, description, 'slug': slug.current}
      } | order(published_at desc)[0...10]
  }`;

  return await client.fetch(query, { lang })
}

export async function findBlogArticle(lang: string, slug: string ) {
  const query = groq`*[_type == "blog_article" && slug.current == "${slug}" && lang == "${lang}"]{ 
      _id,
      'lang': lang,
      title,
      published_at,
      description,
      'businesses': businesses[].name,
      'cover_img': coverImg{
        'img_url': asset->url,
        'alt': alt
      },
      'tags': tags[].name,
      'category': category->{title, description, 'slug': slug.current},
      'body': body[].children[].text
  }[0]`;

  console.log('query :::', query)
  const res = await client.fetch(query)
  console.log('res :::', res)
  return res
}

export async function getRelatedBlogArticles(lang: string, slug: string) {
  const query = groq`*[_type == "blog_article" && lang == "${lang}" && slug.current != "${slug}"]{ 
      _id,
      'lang': lang,
      title,
      'slug': slug.current,
      published_at,
      description,
      'businesses': businesses[].name,
      'category': category->{title, description, 'slug': slug.current},
      'cover_img': coverImg{
        'img_url': asset->url,
        'alt': alt
      },
  }`;

  return await client.fetch(query, { slug, lang })
}


export async function getCategoryArticles(lng: string, cat: string) {
  const query = groq`*[_type == "blog_article" && lang == "${lng}" && category->slug.current == "${cat}"]{
    _id,
    'lang': lang,
    title,
    'slug': slug.current,
    published_at,
    description,
    'category': category->{title, description, 'slug': slug.current},
    'businesses': businesses[].name,
    'cover_img': coverImg{
      'img_url': asset->url,
      'alt': alt
    },
  } | order(published_at desc)[0...4]`;

  return await client.fetch(query, { lng, cat })
}

export async function getOpsArticles(lng: string, ops: string) {
  const query = groq`*[_type == "blog_article" && lang == "${lng}" && $ops in businesses[].name]{
    _id,
    'lang': lang,
    title,
    'slug': slug.current,
    published_at,
    description,
    'category': category->{title, description, 'slug': slug.current},
    'businesses': businesses[].name,
    'cover_img': coverImg{
      'img_url': asset->url,
      'alt': alt
    },
  } | order(published_at desc)[0...4]`;

  return await client.fetch(query, { lng, ops })
}
