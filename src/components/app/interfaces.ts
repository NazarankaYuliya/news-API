export interface articleData {
    status: string;
    totalResults: number;
    articles: articleItem[];
}

export interface sourceData {
    status: string;
    sources: sourceItem[];
}

export interface sourceItem {
    id: string;
    name: string;
}

export interface articleItem {
    source: sourceItem;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
