import {instance} from './config';

export class ArticleService {
    static async getArticles() {
        const response = await instance.get('/api/article/list/');
        const articles = response.data.categories.find(cat => cat.name === 'Статьи');
        return articles;
    }

    static async getUnreadArticlesCount() {
        const response = await instance.get('/api/article/notification/count/');
        const count = response.data.count;
        return count;
    }

    static async getUnreadArticles() {
        return  Promise.resolve([
            'Классификация продуктов Мегафон\n' +
            'в коллекции Мегафон для пользователей продуктов Мегафон',
            'История успеха. Иванов Петр',
            'Классификация продуктов Мегафон\n' +
            'в коллекции Мегафон для пользователей продуктов Мегафон',
            'Классификация продуктов Мегафон\n' +
            'в коллекции Мегафон для пользователей продуктов Мегафон',
            'Классификация продуктов Мегафон\n' +
            'в коллекции Мегафон для пользователей продуктов Мегафон',
        ]);
    }
}