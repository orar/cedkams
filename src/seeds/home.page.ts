import type {HomeLandingPage} from "@/types/sitesettings";

export const homePage:HomeLandingPage = {
  hero: {
    header: {
      title: "Providing Sustainable Infrastructure for Africa’s Growth",
      subText: "We are a highly-diversified Ghanaian conglomerate with a presence in the Construction, Property Development, Logistics, Utilities, and ICT industry. LMI Holdings is a unique company, with a proud history and an ambitious strategic vision to contribute to the building of a developed Africa."
    },
    carousel: [
      {image: "/_static/stocks/s1.jpg", alt: "s1"},
      {image: "/_static/stocks/s2.jpg", alt: "s2"},
      {image: "/_static/stocks/s3.jpg", alt: "s3"},
    ]
  },
  mission: {
    header: {
      title: "Driving growth and Innovation across multiple sectors",
      subText: "Our journey began in 1991 as John Murphy Construction, specializing in roads and commercial real estate. Over the years, we’ve transformed into a dynamic conglomerate with a strong presence in Ghana’s construction, property development, logistics, utilities, and ICT sectors.",

    },
    statement: {
      title: "Vision & Mission",
      text: [
        "At LMI Holdings, we are embarking on a mission to provide sustainable infrastructure solutions that fuel business growth and drive development across Africa.",
        "Hinging on a steadfast commitment to innovation, we envision shaping Africa’s future by delivering the essential frameworks that empower businesses to thrive through sustainable infrastructure.",
        "We are convinced that with a little amount of investment, Africa can create the enabling environment that will attract industrial development to the continent."
      ],
      value_tags: [
        { tag: "passion", icon: "heart" },
        { tag: "integrity", icon: "user" },
        { tag: "hard work", icon: "heart" },
        { tag: "leadership", icon: "heart" },
        { tag: "compliance", icon: "user" },
      ],
    },
    gallery: [
      { src: "/_static/stocks/s1.jpg", alt: "alt", w: 300, h: 1},
      { src: "/_static/stocks/s4.jpg", alt: "alt2", w: 200, h: 1},
      { src: "/_static/stocks/s5.jpg", alt: "alt2", w: 200, h: 1},
      { src: "/_static/stocks/s3.jpg", alt: "alt2", w: 300, h: 1},
      { src: "/_static/stocks/s4.jpg", alt: "alt2", w: 200, h: 1},

    ]
  },
  operations: {
    header: {
      title: "Our Companies",
      label: "What we do"
    },
    sectors: [
      {
        slug: "logistics",
        coverImg: "/_static/stocks/s1.jpg",
        coverImgAlt: "logistics",
        title: "Cedkam Logistics",
        description: "Over the years, we have honed our skills and solidified our position as experts in General Construction and Engineering."
      },{
        slug: "foods",
        coverImg: "/_static/stocks/s2.jpg",
        coverImgAlt: "logistics",
        title: "Cedkam Foods",
        description: "Over the years, we have honed our skills and solidified our position as experts in General Construction and Engineering."
      },{
        slug: "capital",
        coverImg: "/_static/stocks/s3.jpg",
        coverImgAlt: "capital",
        title: "Cedkam Capital",
        description: "Over the years, we have honed our skills and solidified our position as experts in General Construction and Engineering."
      },{
        slug: "energy",
        coverImg: "/_static/stocks/s2.jpg",
        coverImgAlt: "energy",
        title: "Cedkam Energy",
        description: "Over the years, we have honed our skills and solidified our position as experts in General Construction and Engineering."
      }
    ]
  },
  partners: {
    header: {
      title: "Our Partners",
      label: "who we work with"
    },
    partners: [
      {logo: "/_static/brands/intel.png", alt: "partner", name: "Company"},
      {logo: "/_static/brands/ibm.png", alt: "partner", name: "Company"},
      {logo: "/_static/brands/cisco.png", alt: "partner", name: "Company"},
      {logo: "/_static/brands/siemens.png", alt: "partner", name: "Company"}
    ]
  },
  testimonials: {
    header: {
      title: "See What Our Clients Have Achieved and Get Inspired to Reach Your Own Goals",
      subTitle: "The testimonials below provide a glimpse into what partners across private enterprises, public agencies and community associations have to say about collaborating with our subsidiaries.",
      label: "Testimonials"
    },
    items: [
      {
        name: "Stephen Okyere",
        testimony: "LMI Holdings delivered our firm’s new corporate headquarters 3 months ahead of schedule, exceeding quality benchmarks. We strongly recommend them.",
        role: "Associate Manager"
      },
      {
        name: "Stephen Okyere",
        testimony: "LMI Holdings delivered our firm’s new corporate headquarters 3 months ahead of schedule, exceeding quality benchmarks. We strongly recommend them.",
        role: "Associate Manager"
      },
      {
        name: "Stephen Okyere",
        testimony: "LMI Holdings delivered our firm’s new corporate headquarters 3 months ahead of schedule, exceeding quality benchmarks. We strongly recommend them.",
        role: "Associate Manager"
      },
      {
        name: "Stephen Okyere",
        testimony: "LMI Holdings delivered our firm’s new corporate headquarters 3 months ahead of schedule, exceeding quality benchmarks. We strongly recommend them.",
        role: "Associate Manager"
      },
      {
        name: "Stephen Okyere",
        testimony: "LMI Holdings delivered our firm’s new corporate headquarters 3 months ahead of schedule, exceeding quality benchmarks. We strongly recommend them.",
        role: "Associate Manager"
      },
      {
        name: "Stephen Okyere",
        testimony: "LMI Holdings delivered our firm’s new corporate headquarters 3 months ahead of schedule, exceeding quality benchmarks. We strongly recommend them.",
        role: "Associate Manager"
      }
    ]
  },
  news: {
    header: {
      title: "Latest News & Articles",
      subTitle: "The news and articles below provide snapshots into latest projects, product innovations, CSR efforts, best practices and more from across LMI Holdings’ diverse group of companies.",
      label: "Around the clock"
    },
    articles: [
      {
        coverImg: "/_static/stocks/s1.jpg",
        title: "Helios Solar, a subsidiary of LMI Holdings, officially commissions a 16.82 MWP Rooftop Solar PV Project",
        category: "news",
        date: new Date().toDateString(),
        description: "",
        slug: "helios-solar-sub-lmi-holdings"
      }, {
        coverImg: "/_static/stocks/s2.jpg",
        title: "Helios Solar, a subsidiary of LMI Holdings, officially commissions a 16.82 MWP Rooftop Solar PV Project",
        category: "press release",
        date: new Date().toDateString(),
        description: "",
        slug: "helios-solar-sub-lmi-holdings"
      },{
        coverImg: "/_static/stocks/s3.jpg",
        title: "Helios Solar, a subsidiary of LMI Holdings, officially commissions a 16.82 MWP Rooftop Solar PV Project",
        category: "news",
        date: new Date().toDateString(),
        description: "",
        slug: "helios-solar-sub-lmi-holdings"
      },
    ]
  },
  milestones: {
    partners: 23,
    assets: 30000000,
    clients: {
      count: 180,
      statement: "Ranging from warehouses to african shops and export companies we have achieved an unprecedented milestone in setting our hold in the logistics african market"
    },
    workers: 600
  }
}