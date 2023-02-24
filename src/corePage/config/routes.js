/**
 * 路由入口
 * @author LiQingSong
 */
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
NProgress.configure({ showSpinner: false, easing: 'ease', speed: 1000 }); // NProgress Configuration
import { createRouter, createWebHashHistory } from 'vue-router';
import settings from "@/corePage/config/settings";
import SecurityLayout from '@/corePage/layouts/SecurityLayout.vue';
/* UniversalLayout 通用布局，可以与 IndexLayout 互相代替  */
// import UniversalLayoutRoutes from '@/layouts/UniversalLayout/routes';
// import UniversalLayout from '@/layouts/UniversalLayout/index.vue';
/* IndexLayout 自定义布局，可以与 UniversalLayout 互相代替 */
import IndexLayoutRoutes from '@/corePage/layouts/menusData/index';
import IndexLayout from '@/corePage/layouts/IndexLayout/index.vue';
import UserLayoutRoutes from '@/corePage/layouts/UserLayout/routes';
import UserLayout from '@/corePage/layouts/UserLayout/index.vue';
const routes = [
    {
        title: 'empty',
        path: '/',
        component: SecurityLayout,
        children: [
            {
                title: 'empty',
                path: '/',
                redirect: settings.homeRouteItem.path,
                component: IndexLayout,
                children: IndexLayoutRoutes
            },
            {
                title: 'empty',
                path: '/refresh',
                component: () => import('@/project/refresh/index.vue'),
            },
        ]
    },
    {
        title: 'empty',
        path: '/user',
        redirect: '/user/login',
        component: UserLayout,
        children: UserLayoutRoutes
    },
    {
        title: 'app.global.menu.notfound',
        path: '/:pathMatch(.*)*',
        component: () => import('@/project/404/index.vue'),
    }
];
const router = createRouter({
    scrollBehavior( /* to, from, savedPosition */) {
        return { top: 0 };
    },
    history: createWebHashHistory(process.env.BASE_URL),
    routes: routes,
});
router.beforeEach(( /* to, from */) => {
    // start progress bar
    NProgress.start();
});
router.afterEach(() => {
    // finish progress bar
    NProgress.done();
});
export default router;
//# sourceMappingURL=routes.js.map