import {Operations} from "@/app/[lng]/page";


interface HomeLandingPageSettings {
  name: string

  hero: {
    hero__header_title: string,
    hero__header_subText: string,
    hero__carousel: HeroCarousel[],
  }

  mission: {
    mission__header_title: string,
    mission__header_subText: string,
    mission__statement_title: string,
    mission__statement_text: string[],
    mission__statement_value_tags: CoreValueTag[],
    mission__gallery: MissionGalleryItem[],
  }

  operations: {
    operations__header_title: string,
    operations__header_label: string,
    operations__companies: OperationCompany[],
  }

  news: {
    news__header_label: string,
    news__header_title: string,
    news__header_subTitle: string,
  }

  milestones: {
    milestones__partner_logos: PartnerLogo[]
    milestones__assets: number,
    milestones__partners: number,
    milestones__clients_count: number,
    milestones__clients_statement?: string,
  }
}
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
    milestones__partner_logos: PartnerLogo[]
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
    news__header_label: string,

  }
}


export interface ServiceItemType {
  name: string
  slug: string
  cover_img: {
    img_url: string
    alt: string
  }
  description: string
  content: string[]
  gallery: {
    img_url: string
    alt: string
  }[]
}

export interface ProductItemType {
  name: string
  slug: string
  cover_img: {
    img_url: string
    alt: string
  }
  description: string
  content: string[]
  gallery: {
    img_url: string
    alt: string
  }[]
}

export interface ProductItemType {
  name: string
  slug: string
  cover_img: {
    img_url: string
    alt: string
  }
  description: string
  content: string[]
  gallery: {
    img_url: string
    alt: string
  }[]
}

export interface NewsPageSettings {
  latest: HomeNewsArticle,
  top10: HomeNewsArticle[]
}
interface HeroCarousel {
  img_url: string,
  alt: string
}

interface CoreValueTag {
  tag: string,
  icon: string
}

interface MissionGalleryItem {
  img_url: string, alt: string,
}

interface OperationCompany {
  slug: string,
  cover_url: string,
  cover_alt: string,
  title: string,
  description: string
}

interface HomeNewsArticle {
  lang: string,
  title: string
  slug: string
  cover_img: {
    img_url: string
    alt: string
  }
  description: string
  category: {
    title: string
    slug: string
    description
  }
  body: BlogBody[]
  created_at: string|Date
  published_at: string|Date
  tags: string[]
  businesses: string[]
}

interface PartnerLogo { logo_url: string, alt: string, name: string }


export interface HomeLandingPage {
  hero: {
    header: {
      title: string,
      subText: string,
    },
    carousel: {
      image: string,
      alt: string
    }[]
  },
  mission: {
    header: {
      title: string,
      subText: string
    },
    statement: {
      title: string,
      text: string[],
      value_tags: { tag: string, icon: string }[]
    },
    gallery: { src: string, alt: string, w: number, h: number }[]
  },
  operations: {
    header: {
      title: string,
      label: string
    },
    sectors:   {
        slug: string,
        coverImg: string,
        coverImgAlt: string,
        title: string,
        description: string
      }[]
  },
  partners:{
    header: {
      title: string
      label: string
    },
    partners: { logo: string, alt: string, name: string }[]
  },
  testimonials: {
    header: {
      title: string,
      subTitle: string,
      label: string,
    },
    items: {
      name: string,
      role?: string,
      testimony: string,

    }[]
  }

  news: {
    header: {
      title: string,
      subTitle: string
      label: string
    },
    articles: {
      slug: string
      coverImg: string,
      title: string,
      description: string,
      date: string,
      category: string,
      }[]
  },
  milestones: {
    partners: number,
    assets: number,
    clients: {
      count: number,
      statement?: string
    },
    workers: number
  }
}

export interface AboutPage {
  hero: {

  }
}

export interface BoDPage {
  hero: {

  }
}

export interface ContactUsPage {
  hero: {

  }
}

export interface CSRPage {
  hero: {

  }
}

export interface NewsPage {
  hero: {

  }
}

export interface ProjectsPage {
  hero: {

  }
}