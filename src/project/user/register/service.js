import request from '@/corePage/utils/request';
export async function accountReg(params) {
    return request({
        url: '/user/register',
        method: 'POST',
        data: params,
    });
}
//# sourceMappingURL=service.js.map