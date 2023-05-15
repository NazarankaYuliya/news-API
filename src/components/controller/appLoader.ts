import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '3a3873da1d88411ea3319d9c681b16e5',
        });
    }
}

export default AppLoader;
