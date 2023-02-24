import { equalTabNavRoute } from '@/corePage/utils/routes';
import settings from '@/corePage/config/settings';
import router from '@/corePage/config/routes';
const homeRoute = router.resolve(settings.homeRouteItem.path);
const initState = {
    collapsed: false,
    headFixed: settings.headFixed,
    tabNavEnable: settings.tabNavEnable,
    headTabNavList: [
        {
            route: homeRoute,
            menu: settings.homeRouteItem
        }
    ],
    topNavEnable: settings.topNavEnable,
    theme: settings.theme,
    navMode: settings.navMode,
    leftSiderFixed: settings.leftSiderFixed,
};
const StoreModel = {
    namespaced: true,
    name: 'global',
    state: {
        ...initState
    },
    mutations: {
        changeLayoutCollapsed(state, payload) {
            state.collapsed = payload;
        },
        setHeadFixed(state, payload) {
            state.headFixed = payload;
        },
        setTabNavEnable(state, payload) {
            state.tabNavEnable = payload;
        },
        setHeadTabNavList(state, payload) {
            state.headTabNavList = payload;
        },
        /**
         * 关闭当前tabNav，并跳转自定义路由
         * @param state
         * @param payload RouteLocationRaw 跳转路由参数，必须
         */
        closeCurrentHeadTabNav(state, payload) {
            const navList = state.headTabNavList.filter((item2) => !equalTabNavRoute(router.currentRoute.value, item2.route, item2.menu.tabNavType));
            state.headTabNavList = [
                ...navList
            ];
            router.push(payload);
        },
        setTopNavEnable(state, payload) {
            state.topNavEnable = payload;
        },
        setTheme(state, payload) {
            state.theme = payload;
        },
        setNavMode(state, payload) {
            state.navMode = payload;
        },
        setLeftSiderFixed(state, payload) {
            state.leftSiderFixed = payload;
        },
    },
    actions: {}
};
export default StoreModel;
//# sourceMappingURL=global.js.map