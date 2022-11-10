import {instance} from './config';

export class analitycService {
    static async articleGet(source, target) {
        await instance.put('/api/analytics/event/article.get/',
            {source, target}
        );
    }

    static async articeRead(title, id) {
        await instance.put(`/api/analytics/event/article.read/${id}`,
            {target: title}
        );
    }
}