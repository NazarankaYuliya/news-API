import News from './news/news';
import Sources from './sources/sources';
import { articleData, sourceData } from '../app/interfaces';

export class AppView {
    private news;
    private sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: articleData | undefined) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: sourceData | undefined) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
