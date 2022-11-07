import {instance} from './config';

export default class ArticleService {
    static async getArticles() {
        const response = await instance.get('/api/article/list/');
        const articles = response.data.categories.find(cat => cat.name === 'Статьи');
        return articles;
    }
}