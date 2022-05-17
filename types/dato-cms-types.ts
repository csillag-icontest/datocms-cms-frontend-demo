type PictureData = any;

export interface Author {
  name: string;
  picture: PictureData;
}

export type BlogData = any; // TODO

export interface PostData {
  author: Author;
  content: any; // TODO
  coverImage: any; // TODO
  date: string;
  seo: any[]; // TODO
  slug: string;
  name: string;
  title: string;
  excerpt: string;
  ogImage: any; // TODO
}

export interface Favicon {}

export interface SiteData {
  favicon: Favicon[];
}
