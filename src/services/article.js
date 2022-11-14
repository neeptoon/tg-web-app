import {instance} from './config';

export class ArticleService {
    static async getArticles() {
        const response = await instance.get('/api/article/list/');
        const articles = response.data.categories.find(cat => cat.name === 'Статьи');
        return articles.subcategories;
    }

    static async getSingleArticle(id) {
        const response =  await instance.get(`/api/article/${id}/`);
        return response.data;
    }

    static async getNewArticles() {
        const response = await instance.get('/api/article/notification/list/');
        return response.data.articles;
    }
}