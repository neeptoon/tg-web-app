import {instance} from './config';

export class analyticService {
    static async sendUserMove({source = null, target}) {
        await instance.put('/api/analytics/event/article.get/',
            {source, target}
        );
    }

    static async articleRead(title, id) {
        await instance.put(`/api/analytics/event/article.read/${id}/`,
            {target: title}
        );
    }
}