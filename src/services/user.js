import request from '@/corePage/utils/request';
export async function queryCurrent() {
    return request({
        url: '/user/info',
        method: 'get'
    });
}
export async function queryMessage() {
    return request({
        url: '/user/message'
    });
}
//# sourceMappingURL=user.js.map