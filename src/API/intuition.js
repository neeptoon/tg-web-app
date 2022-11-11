import {instance} from './config';

export class IntuitionService {
    static async getQuestion() {
        const response = await instance.get('/api/intuition/question/');
        const question = response.data.question;
        return question;
    }
}