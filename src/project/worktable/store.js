import { hotSearchQueryList, hotTagsQueryList, articleHitQueryList, worksHitQueryList, } from './service';
const initState = {
    hotSearchData: {
        list: [],
        pagination: {
            total: 0,
            current: 1,
            pageSize: 5,
            showSizeChanger: false,
        },
    },
    hotTagsData: {
        list: [],
        pagination: {
            total: 0,
            current: 1,
            pageSize: 5,
            showSizeChanger: false,
        },
    },
    articleHitData: {
        list: [],
        pagination: {
            total: 0,
            current: 1,
            pageSize: 5,
            showSizeChanger: false,
        },
    },
    worksHitData: {
        list: [],
        pagination: {
            total: 0,
            current: 1,
            pageSize: 5,
            showSizeChanger: false,
        },
    },
};
const StoreModel = {
    namespaced: true,
    name: 'Home',
    state: {
        ...initState
    },
    mutations: {
        setHotSearchData(state, payload) {
            state.hotSearchData = payload;
        },
        setHotTagsData(state, payload) {
            state.hotTagsData = payload;
        },
        setArticleHitData(state, payload) {
            state.articleHitData = payload;
        },
        setWorksHitData(state, payload) {
            state.worksHitData = payload;
        },
    },
    actions: {
        async queryHotSearchData({ commit }, payload) {
            try {
                const response = await hotSearchQueryList(payload);
                const { data } = response;
                commit('setHotSearchData', {
                    ...initState.hotSearchData,
                    list: data.list || [],
                    pagination: {
                        ...initState.hotSearchData.pagination,
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
        async queryHotTagsData({ commit }, payload) {
            try {
                const response = await hotTagsQueryList(payload);
                const { data } = response;
                commit('setHotTagsData', {
                    ...initState.hotTagsData,
                    list: data.list || [],
                    pagination: {
                        ...initState.hotTagsData.pagination,
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
        async queryArticleHitData({ commit }, payload) {
            try {
                const response = await articleHitQueryList(payload);
                const { data } = response;
                commit('setArticleHitData', {
                    ...initState.articleHitData,
                    list: data.list || [],
                    pagination: {
                        ...initState.articleHitData.pagination,
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
        async queryWorksHitData({ commit }, payload) {
            try {
                const response = await worksHitQueryList(payload);
                const { data } = response;
                commit('setWorksHitData', {
                    ...initState.worksHitData,
                    list: data.list || [],
                    pagination: {
                        ...initState.worksHitData.pagination,
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
    }
};
export default StoreModel;
//# sourceMappingURL=store.js.map