import request from '@/corePage/utils/request';

export async function dailynewArticles(): Promise<any> {
  return request({
      url: '/home/articles/dailynew',
      method: 'get'
  });
}
