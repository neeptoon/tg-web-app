import {instance} from './config';

export default class ArticleService {
    static async getAll() {
        const response = await instance.get('/api/article/list/');
        return response.data;
    }
}