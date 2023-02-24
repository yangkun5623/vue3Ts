const UserLayoutRoutes = [
    {
        title: 'user-layout.menu.login',
        path: 'login',
        component: () => import('@/project/user/login/index.vue'),
    },
    {
        title: 'user-layout.menu.register',
        path: 'register',
        component: () => import('@/project/user/register/index.vue'),
    }
];
export default UserLayoutRoutes;
//# sourceMappingURL=routes.js.map