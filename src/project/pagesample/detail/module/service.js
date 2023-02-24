import request from '@/corePage/utils/request';
export async function queryDetail() {
    return request({
        url: '/pages/detail',
        method: 'get'
    });
}
//# sourceMappingURL=service.js.map