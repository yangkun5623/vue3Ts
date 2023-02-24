import request from '@/corePage/utils/request';

export async function weeknewWorks(): Promise<any> {
  return request({
      url: '/home/works/weeknew',
      method: 'get'
  });
}
