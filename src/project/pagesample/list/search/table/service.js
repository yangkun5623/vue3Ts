import request from '@/corePage/utils/request';
export async function queryList(params) {
    return request({
        url: '/pages/list',
        method: 'get',
        params,
    });
}
export async function createData(params) {
    return request({
        url: '/pages/list',
        method: 'POST',
        data: params,
    });
}
export async function updateData(id, params) {
    return request({
        url: `/pages/list/${id}`,
        method: 'PUT',
        data: params,
    });
}
export async function removeData(id) {
    return request({
        url: `/pages/list/${id}`,
        method: 'delete',
    });
}
export async function detailData(id) {
    return request({ url: `/pages/list/${id}` });
}
//# sourceMappingURL=service.js.map