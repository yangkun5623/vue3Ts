import settings from "@/corePage/config/settings";
import BlankLayout from '@/corePage/layouts/BlankLayout.vue';
const IndexLayoutRoutes = [
    /*
    {
      title: 'universal-layout.menu.home',
      path: '/home',
      component: ()=> import('@/project/home/index.vue')
    }, */
    {
        icon: 'home',
        title: 'universal-layout.menu.home',
        path: '/home',
        redirect: settings.homeRouteItem.path,
        component: BlankLayout,
        children: [
            {
                ...settings.homeRouteItem
            },
            {
                icon: 'edit',
                title: 'universal-layout.menu.home.custom-breadcrumbs',
                path: 'custombreadcrumbs',
                component: () => import('@/project/custom-breadcrumbs/index.vue'),
                breadcrumb: [
                    {
                        title: 'universal-layout.menu.home.custom-breadcrumbs',
                        path: '/home/custombreadcrumbs',
                    },
                    {
                        title: 'universal-layout.menu.home',
                        path: '/home',
                    },
                    {
                        title: 'universal-layout.menu.home.custom-breadcrumbs.liqingsong.cc',
                        path: 'http://liqingsong.cc',
                    },
                ],
                tabNavCloseBefore: (close) => {
                    if (window.confirm('确认关闭吗')) {
                        close();
                    }
                }
            },
            {
                icon: 'detail',
                title: 'universal-layout.menu.home.docs',
                path: 'http://admin-antd-vue.liqingsong.cc/',
                belongTopMenu: '/home',
                redirect: ''
            },
        ],
    },
    {
        icon: 'components',
        title: 'universal-layout.menu.component',
        path: '/component',
        redirect: '/component/icon/svg',
        component: BlankLayout,
        children: [
            {
                icon: 'icon',
                title: 'universal-layout.menu.component.icon',
                path: 'icon',
                redirect: '/component/icon/svg',
                component: BlankLayout,
                children: [
                    {
                        title: 'universal-layout.menu.component.icon.svg',
                        path: 'svg',
                        component: () => import('@/project/component/icon/svg/index.vue'),
                    },
                    {
                        title: 'universal-layout.menu.component.icon.font',
                        path: 'font',
                        component: () => import('@/project/component/icon/font/index.vue'),
                    },
                ]
            },
            {
                icon: 'editor',
                title: 'universal-layout.menu.component.editor',
                path: 'editor',
                redirect: '/component/editor/tuieditor',
                component: BlankLayout,
                children: [
                    {
                        title: 'universal-layout.menu.component.editor.tui-editor',
                        path: 'tuieditor',
                        component: () => import('@/project/component/editor/tui-editor/index.vue'),
                    },
                    {
                        title: 'universal-layout.menu.component.editor.ckeditor',
                        path: 'ckeditor',
                        component: () => import('@/project/component/editor/ckeditor/index.vue'),
                    }
                ]
            }
        ]
    },
    {
        icon: 'lib',
        title: 'universal-layout.menu.lib',
        path: '/lib',
        redirect: '/lib/export/excel',
        component: BlankLayout,
        children: [
            {
                icon: 'lib',
                title: 'universal-layout.menu.lib.export',
                path: 'export',
                redirect: '/lib/export/excel',
                component: BlankLayout,
                children: [
                    {
                        title: 'universal-layout.menu.lib.export.excel',
                        path: 'excel',
                        component: () => import('@/project/lib/export/excel/index.vue'),
                    }
                ]
            }
        ]
    },
    {
        icon: 'page',
        title: 'universal-layout.menu.pages',
        path: '/pagesample',
        redirect: '/pagesample/list/basic',
        component: BlankLayout,
        children: [
            {
                icon: 'list',
                title: 'universal-layout.menu.pages.list',
                path: 'list',
                redirect: '/pagesample/list/basic',
                component: BlankLayout,
                children: [
                    {
                        title: 'universal-layout.menu.pages.list.basic',
                        path: 'basic',
                        component: () => import('@/project/pagesample/list/basic/index.vue'),
                    },
                    {
                        title: 'universal-layout.menu.pages.list.table',
                        path: 'table',
                        component: () => import('@/project/pagesample/list/table/index.vue'),
                    },
                    {
                        title: 'layout.menu.pages.list.vxetable',
                        path: 'vxetable',
                        component: () => import('@/project/pagesample/list/vxetable/vxetable.vue'),
                    },
                    {
                        title: 'universal-layout.menu.pages.list.highly-adaptive-table',
                        path: 'highlyadaptivetable',
                        component: () => import('@/project/pagesample/list/highly-adaptive-table/index.vue'),
                    },
                    {
                        title: 'universal-layout.menu.pages.list.search',
                        path: 'search',
                        redirect: '/pagesample/list/search/table',
                        component: BlankLayout,
                        children: [
                            {
                                title: 'universal-layout.menu.pages.list.search.table',
                                path: 'table',
                                component: () => import('@/project/pagesample/list/search/table/index.vue'),
                            }
                        ],
                    },
                ],
            },
            {
                icon: 'edit',
                title: 'universal-layout.menu.pages.form',
                path: 'form',
                redirect: '/pagesample/form/basic',
                component: BlankLayout,
                children: [
                    {
                        title: 'universal-layout.menu.pages.form.basic',
                        path: 'basic',
                        component: () => import('@/project/pagesample/form/basic/index.vue'),
                    },
                    {
                        title: 'universal-layout.menu.pages.form.complex',
                        path: 'complex',
                        component: () => import('@/project/pagesample/form/complex/index.vue'),
                    },
                ],
            },
            {
                icon: 'detail',
                title: 'universal-layout.menu.pages.detail',
                path: 'detail',
                redirect: '/pagesample/detail/basic',
                component: BlankLayout,
                children: [
                    {
                        title: 'universal-layout.menu.pages.detail.basic',
                        path: 'basic',
                        component: () => import('@/project/pagesample/detail/basic/index.vue'),
                        tabNavType: 'querypath',
                    },
                    {
                        title: 'universal-layout.menu.pages.detail.module',
                        path: 'module',
                        component: () => import('@/project/pagesample/detail/module/index.vue'),
                    },
                    {
                        title: 'universal-layout.menu.pages.detail.table',
                        path: 'table',
                        component: () => import('@/project/pagesample/detail/table/index.vue'),
                    },
                ],
            },
        ],
    },
    {
        icon: 'permissions',
        title: 'universal-layout.menu.roles',
        path: '/roles',
        redirect: '/roles/all',
        component: BlankLayout,
        children: [
            {
                icon: 'detail',
                title: 'universal-layout.menu.roles.all',
                path: 'all',
                component: () => import('@/project/roles/all/index.vue'),
            },
            {
                icon: 'detail',
                roles: ['user'],
                title: 'universal-layout.menu.roles.user',
                path: 'user',
                component: () => import('@/project/roles/user/index.vue'),
            },
            {
                icon: 'detail',
                roles: ['test'],
                title: 'universal-layout.menu.roles.test',
                path: 'test',
                component: () => import('@/project/roles/test/index.vue'),
            },
        ],
    },
];
export default IndexLayoutRoutes;
//# sourceMappingURL=routes.js.map