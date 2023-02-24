import request from '@/corePage/utils/request';

export async function queryCurrent(): Promise<any> {
    return request({
        url: '/user/info',
        method: 'get'
    });
}

export async function queryMessage(): Promise<any> {
    return request({
        url: '/user/message'
    });
}
