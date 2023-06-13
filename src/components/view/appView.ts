import News from './news/news';
import Sources from './sources/sources';
import {
  IarticleData,
  IsourceData,
  IsourceItem,
  IarticleItem,
} from '../app/interfaces';

export class AppView {
  private news;
  private sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: IarticleData | undefined): void {
    const values: IarticleItem[] = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  public drawSources(data: IsourceData | undefined): void {
    const values: IsourceItem[] = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
