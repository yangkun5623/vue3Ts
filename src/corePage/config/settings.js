const settings = {
    siteTitle: 'ADMIN-ANTD-VUE',
    homeRouteItem: {
        icon: 'control',
        title: 'index-layout.menu.home.workplace',
        path: '/home/workplace',
        component: () => import('@/project/worktable/index.vue')
    },
    siteTokenKey: 'admin_antd_vue_token',
    ajaxHeadersTokenKey: 'x-token',
    ajaxResponseNoVerifyUrl: [
        '/user/login',
        '/user/info',
    ],
    iconfontUrl: [],
    /* 以下是针对所有 Layout 扩展字段 */
    headFixed: true,
    tabNavEnable: true,
    /* 以下是针对 IndexLayout 扩展字段 */
    topNavEnable: false,
    /* 以下是针对 UniversalLayout 扩展字段 */
    theme: 'dark',
    navMode: 'inline',
    leftSiderFixed: true,
};
export default settings;
//# sourceMappingURL=settings.js.map