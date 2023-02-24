import request from '@/corePage/utils/request';
export async function hotSearchQueryList(params) {
    return request({
        url: '/home/searchs/keywords',
        method: 'get',
        params,
    });
}
export async function hotTagsQueryList(params) {
    return request({
        url: '/home/tags',
        method: 'get',
        params,
    });
}
export async function articleHitQueryList(params) {
    return request({
        url: '/home/articles',
        method: 'get',
        params,
    });
}
export async function worksHitQueryList(params) {
    return request({
        url: '/home/works',
        method: 'get',
        params,
    });
}
//# sourceMappingURL=service.js.map