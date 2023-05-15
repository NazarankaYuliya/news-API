import './news.css';
import { articleItem } from '../../app/interfaces';

class News {
    draw(data: articleItem[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment() as DocumentFragment;
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) (newsClone.querySelector('.news__item') as HTMLElement).classList.add('alt');

            (newsClone.querySelector('.news__meta-photo') as HTMLStyleElement).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            (newsClone.querySelector('.news__meta-author') as Node).textContent = item.author || item.source.name;
            (newsClone.querySelector('.news__meta-date') as Node).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (newsClone.querySelector('.news__description-title') as Node).textContent = item.title;
            (newsClone.querySelector('.news__description-source') as Node).textContent = item.source.name;
            (newsClone.querySelector('.news__description-content') as Node).textContent = item.description;
            (newsClone.querySelector('.news__read-more a') as Element).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (document.querySelector('.news') as HTMLElement).innerHTML = '';
        (document.querySelector('.news') as HTMLElement).appendChild(fragment);
    }
}

export default News;
