import request from '@/corePage/utils/request';
export async function dailynewArticles() {
    return request({
        url: '/home/articles/dailynew',
        method: 'get'
    });
}
//# sourceMappingURL=service.js.map