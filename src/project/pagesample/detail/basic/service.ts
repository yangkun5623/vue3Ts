import request from '@/corePage/utils/request';

export async function queryDetail(): Promise<any> {
  return request({
    url: '/pages/detail',
    method: 'get'
  });
}
