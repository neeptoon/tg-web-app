import {instance} from './config';

export default class AuthService {
    static async getUserName() {
        const response = await instance.get('/api/users/authorization/user/');
        const userName = response.data.user.firstName;
        return userName;
    }
}