import request from '@/corePage/utils/request';
export async function weeknewWorks() {
    return request({
        url: '/home/works/weeknew',
        method: 'get'
    });
}
//# sourceMappingURL=service.js.map