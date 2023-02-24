import { queryDetail } from './service';
const initState = {
    detail: {
        userInfo: {
            name: '',
            tel: '',
            courier: '',
            address: '',
            remark: '',
        },
        refundApplication: {
            ladingNo: '',
            saleNo: '',
            state: '',
            childOrders: '',
        },
        returnGoods: [],
        returnProgress: [],
    },
};
const StoreModel = {
    namespaced: true,
    name: 'DetailModule',
    state: {
        ...initState
    },
    mutations: {
        setDetail(state, payload) {
            state.detail = payload;
        },
    },
    actions: {
        async queryDetail({ commit }) {
            try {
                const response = await queryDetail();
                const { data } = response;
                commit('setDetail', {
                    ...initState.detail,
                    ...data
                });
                return true;
            }
            catch (error) {
                return false;
            }
        }
    }
};
export default StoreModel;
//# sourceMappingURL=store.js.map