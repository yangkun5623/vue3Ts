import request from '@/corePage/utils/request';
export async function monthnewTopics() {
    return request({
        url: '/home/topics/monthnew',
        method: 'get'
    });
}
//# sourceMappingURL=service.js.map