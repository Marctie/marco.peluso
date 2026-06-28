export interface PostMeta {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  excerpt: string;
  tags: string[];
  readingMinutes: number;
  cover?: string;
  youtube?: string;
}

export interface Post extends PostMeta {
  html: string;
}
