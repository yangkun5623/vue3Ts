import { queryCurrent, queryMessage } from "@/services/user";
import { removeToken } from "@/corePage/utils/localToken";
const initState = {
    currentUser: {
        id: 0,
        name: '',
        avatar: '',
        roles: [],
    },
    message: 0,
};
const StoreModel = {
    namespaced: true,
    name: 'user',
    state: {
        ...initState
    },
    mutations: {
        saveCurrentUser(state, payload) {
            state.currentUser = {
                ...initState.currentUser,
                ...payload,
            };
        },
        saveMessage(state, payload) {
            state.message = payload;
        }
    },
    actions: {
        async fetchCurrent({ commit }) {
            try {
                const response = await queryCurrent();
                const { data } = response;
                commit('saveCurrentUser', data || {});
                return true;
            }
            catch (error) {
                return false;
            }
        },
        async fetchMessage({ commit }) {
            try {
                const response = await queryMessage();
                const { data } = response;
                commit('saveMessage', data || 0);
                return true;
            }
            catch (error) {
                return false;
            }
        },
        async logout({ commit }) {
            try {
                await removeToken();
                commit('saveCurrentUser', { ...initState.currentUser });
                return true;
            }
            catch (error) {
                return false;
            }
        }
    }
};
export default StoreModel;
//# sourceMappingURL=user.js.map