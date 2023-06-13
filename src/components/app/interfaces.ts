export interface IarticleData {
  status: string;
  totalResults: number;
  articles: IarticleItem[];
}

export interface IsourceData {
  status: string;
  sources: IsourceItem[];
}

export interface IsourceItem {
  id: string;
  name: string;
}

export interface IarticleItem {
  source: IsourceItem;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
