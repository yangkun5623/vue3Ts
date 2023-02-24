import { queryList, removeData, createData, detailData, updateData, } from './service';
const initState = {
    tableData: {
        list: [],
        pagination: {
            total: 0,
            current: 1,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
        },
    },
    updateData: {},
};
const StoreModel = {
    namespaced: true,
    name: 'ListBasic',
    state: {
        ...initState
    },
    mutations: {
        setTableData(state, payload) {
            state.tableData = payload;
        },
        setUpdateData(state, payload) {
            state.updateData = payload;
        },
    },
    actions: {
        async queryTableData({ commit }, payload) {
            try {
                const response = await queryList(payload);
                const { data } = response;
                commit('setTableData', {
                    ...initState.tableData,
                    list: data.list || [],
                    pagination: {
                        ...initState.tableData.pagination,
                        current: payload.page,
                        total: data.total || 0,
                    },
                });
                return true;
            }
            catch (error) {
                return false;
            }
        },
        async deleteTableData({ commit }, payload) {
            try {
                await removeData(payload);
                return true;
            }
            catch (error) {
                return false;
            }
        },
        async createTableData({ commit }, payload) {
            try {
                await createData(payload);
                return true;
            }
            catch (error) {
                return false;
            }
        },
        async queryUpdateData({ commit }, payload) {
            try {
                const response = await detailData(payload);
                const { data } = response;
                commit('setUpdateData', {
                    ...initState.updateData,
                    ...data,
                });
                return true;
            }
            catch (error) {
                return false;
            }
        },
        async updateTableData({ commit }, payload) {
            try {
                const { id, ...params } = payload;
                await updateData(id, { ...params });
                return true;
            }
            catch (error) {
                return false;
            }
        },
    }
};
export default StoreModel;
//# sourceMappingURL=store.js.map