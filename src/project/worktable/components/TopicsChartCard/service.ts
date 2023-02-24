import request from '@/corePage/utils/request';

export async function monthnewTopics(): Promise<any> {
  return request({
      url: '/home/topics/monthnew',
      method: 'get'
  });
}
