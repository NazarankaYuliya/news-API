import { IsourceData } from '../app/interfaces';

enum endpoint {
  'sources',
  'everything',
  'top-headlines',
}

interface IapiKeyObj {
  apiKey: string;
}

interface IgetRespObj {
  endpoint: keyof typeof endpoint;
  options?: Partial<IapiSourceItem>;
}

interface IapiSourceItem {
  sources: string;
}

interface Ioptions {
  sources?: string;
}

interface IcallBack<Type> {
  (arg: Type): void;
}

interface IerrorCallBack {
  (): void;
}

class Loader {
  private baseLink;
  public readonly options;

  constructor(baseLink: string, options: IapiKeyObj) {
    this.baseLink = baseLink;
    this.options = options;
  }

  public getResp(
    { endpoint, options = {} }: IgetRespObj,
    callback: IerrorCallBack = () => {
      console.error('No callback for GET response');
    },
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  public errorHandler(res: Response): Response {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(
          `Sorry, but there is ${res.status} error: ${res.statusText}`,
        );
      throw Error(res.statusText);
    }

    return res;
  }

  public makeUrl(options: Ioptions, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    const queryParams = Object.entries(urlOptions)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');
    return `${this.baseLink}${endpoint}?${queryParams}`;
  }

  public load(
    method: string,
    endpoint: string,
    callback: IcallBack<IsourceData>,
    options = {},
  ): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
