import request from '@/corePage/utils/request';
export async function createData(params) {
    return request({
        url: '/pages/form',
        method: 'POST',
        data: params,
    });
}
//# sourceMappingURL=service.js.map