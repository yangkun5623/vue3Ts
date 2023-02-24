import { createData } from './service';
const initState = {};
const StoreModel = {
    namespaced: true,
    name: 'FormComplex',
    state: {
        ...initState
    },
    mutations: {},
    actions: {
        async create({ commit }, payload) {
            try {
                await createData(payload);
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