import { accountReg } from "./service";
const initState = {
    errorMsg: undefined,
};
const StoreModel = {
    namespaced: true,
    name: 'userregister',
    state: {
        ...initState
    },
    mutations: {
        changeErrorMsg(state, payload) {
            state.errorMsg = payload;
        },
    },
    actions: {
        async register({ commit }, payload) {
            let msg = undefined;
            try {
                await accountReg(payload);
                msg = '';
            }
            catch (error) {
                if (error.message && error.message === 'CustomError') {
                    const { response } = error;
                    const { data } = response;
                    msg = data.msg || 'error';
                }
            }
            commit('changeErrorMsg', msg);
            if (msg === '') {
                return true; // 成功
            }
            else if (typeof msg === 'undefined') {
                return undefined; // 服务器错误
            }
            else {
                return false; // 自定义错误
            }
        }
    }
};
export default StoreModel;
//# sourceMappingURL=store.js.map