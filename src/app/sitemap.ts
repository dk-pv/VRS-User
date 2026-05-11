import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://vrsrealinvest.com.au",
      lastModified: new Date(),
    },

    {
      url: "https://vrsrealinvest.com.au/about",
      lastModified: new Date(),
    },

    {
      url: "https://vrsrealinvest.com.au/properties",
      lastModified: new Date(),
    },

    {
      url: "https://vrsrealinvest.com.au/webinar",
      lastModified: new Date(),
    },

    {
      url: "https://vrsrealinvest.com.au/blog",
      lastModified: new Date(),
    },

    {
      url: "https://vrsrealinvest.com.au/review",
      lastModified: new Date(),
    },

    {
      url: "https://vrsrealinvest.com.au/contact",
      lastModified: new Date(),
    },

    {
      url: "https://vrsrealinvest.com.au/privacy-policy",
      lastModified: new Date(),
    },

    {
      url: "https://vrsrealinvest.com.au/terms-and-conditions",
      lastModified: new Date(),
    },
  ];
}