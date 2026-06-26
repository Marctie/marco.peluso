export interface PostMeta {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  excerpt: string;
  tags: string[];
  readingMinutes: number;
}

export interface Post extends PostMeta {
  html: string;
}
