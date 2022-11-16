import {instance} from './config';

export class AuthService {
    static async getUserInfo() {
        const response = await instance.get('/api/users/authorization/user/');
        const user = response.data.user;
        return user;
    }

    static async getUserAuth() {
        const response = await instance.get('/api/users/authorization/ping/');
        return response;
    }
}