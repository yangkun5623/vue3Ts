/**
 * Store 入口
 * @author LiQingSong
 */
import { createStore } from 'vuex';
import { importAllStore } from '@/corePage/utils/store';


export default createStore({
  modules: importAllStore(),
  getters: {}
})
