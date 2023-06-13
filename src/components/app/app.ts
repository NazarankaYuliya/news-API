import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IarticleData, IsourceData } from './interfaces';

class App {
  private controller = new AppController();
  private view = new AppView();

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    (document.querySelector(
      '.sources',
    ) as HTMLElement).addEventListener('click', (e: Event) =>
      this.controller.getNews(e, (data: IarticleData | undefined) =>
        this.view.drawNews(data),
      ),
    );
    this.controller.getSources((data: IsourceData | undefined) =>
      this.view.drawSources(data),
    );
  }
}

export default App;
