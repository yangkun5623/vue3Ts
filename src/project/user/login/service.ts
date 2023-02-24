import request from '@/corePage/utils/request';
import { LoginParamsType } from './data.d';

export async function accountLogin(params: LoginParamsType): Promise<any> {
    return request({
        url: '/user/login',
        method: 'POST',
        data: params,
    });
}
