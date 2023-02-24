import { setToken } from '@/corePage/utils/localToken';
import { accountLogin } from './service';
const initState = {
    loginStatus: undefined,
};
const StoreModel = {
    namespaced: true,
    name: 'userlogin',
    state: {
        ...initState
    },
    mutations: {
        changeLoginStatus(state, payload) {
            state.loginStatus = payload;
        },
    },
    actions: {
        async login({ commit }, payload) {
            let status = undefined;
            try {
                const response = await accountLogin(payload);
                const { data } = response;
                setToken(data.token || '');
                status = 'ok';
            }
            catch (error) {
                if (error.message && error.message === 'CustomError') {
                    status = 'error';
                }
            }
            commit('changeLoginStatus', status);
            if (status === 'ok') {
                return true;
            }
            else if (status === 'error') {
                return false;
            }
            return undefined;
        }
    }
};
export default StoreModel;
//# sourceMappingURL=store.js.map