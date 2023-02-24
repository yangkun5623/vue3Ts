import request from '@/corePage/utils/request';
export async function annualnewLinks() {
    return request({
        url: '/home/links/annualnew',
        method: 'get'
    });
}
//# sourceMappingURL=service.js.map