import request from '@/corePage/utils/request';
import { RegisterParamsType } from './data.d';

export async function accountReg(params: RegisterParamsType): Promise<any> {
    return request({
        url: '/user/register',
        method: 'POST',
        data: params,
    });
}
