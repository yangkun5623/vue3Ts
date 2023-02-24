import 'vue-router';
import { isExternal } from './validate';
import { equalObject } from "./object";
/**
 * 获取 route
 * @param pathname path
 * @param routesData routes
 */
export const getRouteItem = (pathname, routesData) => {
    let item = { title: '', path: '', redirect: '', roles: [] };
    for (let index = 0, len = routesData.length; index < len; index += 1) {
        const element = routesData[index];
        if (element.path === pathname) {
            item = element;
            break;
        }
        if (element.children) {
            item = getRouteItem(pathname, element.children);
            if (item.path !== '') {
                break;
            }
        }
    }
    return item;
};
/**
 * 获取 route
 * @param pathname 当前路由path
 * @param jsonRoutesData 经过jsonPathVueRoutes处理，框架的所有路由
 * @returns
 */
export const getJsonRouteItem = (pathname, jsonRoutesData) => {
    return jsonRoutesData[pathname] || {};
};
/**
 * 根据 hidden 判断是否有数据子集
 * @param children RoutesDataItem[]
 */
export const hasChildRoute = (children) => {
    const showChildren = children.filter(item => {
        if (item.hidden) {
            return false;
        }
        return true;
    });
    if (showChildren.length > 0) {
        return true;
    }
    return false;
};
/**
 * 根据路由 path 格式化 - 获取 父path
 * @param pathname path
 * @param separator 路由分割符- 默认 /
 */
export const formatRoutePathTheParents = (pathname, separator = '/') => {
    const arr = [];
    if (!pathname || pathname === '') {
        return arr;
    }
    const pathArr = pathname.split(separator);
    for (let index = 1, len = pathArr.length - 1; index < len; index += 1) {
        arr.push(pathArr.slice(0, index + 1).join(separator));
    }
    return arr;
};
/**
 * 根据父path 设置当前项 path
 * @param pathname path
 * @param parentPath 父path - 默认 /
 * @param headStart 路由起始头 - 默认 /
 */
export const setRoutePathForParent = (pathname, parentPath = '/', headStart = '/') => {
    if (isExternal(pathname)) {
        return pathname;
    }
    return pathname.substr(0, headStart.length) === headStart
        ? pathname
        : `${parentPath}/${pathname}`;
};
/**
 * 根据路由 pathname 数组 - 返回对应的 route 数组
 * @param pathname 路由path数组
 * @param jsonRoutesData 经过jsonPathVueRoutes处理，框架的所有路由
 * @returns
 */
export const getPathsTheRoutes = (pathname, jsonRoutesData) => {
    const routeItem = [];
    for (let index = 0, len = pathname.length; index < len; index += 1) {
        const element = pathname[index];
        const item = getJsonRouteItem(element, jsonRoutesData);
        if (item.path !== '') {
            routeItem.push(item);
        }
    }
    return routeItem;
};
/**
 * 获取面包屑对应的 route 数组
 * @param pathname 当前路由path
 * @param jsonRoutesData 经过jsonPathVueRoutes处理，框架的所有路由
 * @returns
 */
export const getBreadcrumbRoutes = (pathname, jsonRoutesData) => {
    const route = getJsonRouteItem(pathname, jsonRoutesData);
    if (!route.path) {
        return [];
    }
    if (!route.breadcrumb) {
        const parentPath = route.parentPath || [];
        const routes = getPathsTheRoutes(parentPath, jsonRoutesData);
        return route.breadcrumb === false ? routes : [...routes, route];
    }
    return route.breadcrumb;
};
/**
 * 获取当前路由选中的侧边栏菜单path
 * @param route route
 */
export const getSelectLeftMenuPath = (route) => {
    return route.selectLeftMenu || route.path;
};
/**
 * 获取当前路由对应的顶部菜单path
 * @param route route
 */
export const getRouteBelongTopMenu = (route) => {
    if (route.belongTopMenu) {
        return route.belongTopMenu;
    }
    return route.parentPath ? (route.parentPath[0] || `/${route.path.split('/')[1]}`) : `/${route.path.split('/')[1]}`;
};
/**
 * 格式化返回 vue 路由, 主要处理特殊情况
 * @param routesData routes
 * @param parentPath 父path - 默认 /
 * @param headStart 路由起始头 - 默认 /
 */
export const vueRoutes = (routesData, parentPath = '/', headStart = '/') => {
    return routesData.map(item => {
        const { children } = item;
        const itemChildren = children || [];
        const newItem = { ...item };
        newItem.path = setRoutePathForParent(newItem.path, parentPath, headStart);
        if (item.children) {
            newItem.children = [
                ...vueRoutes(itemChildren, newItem.path, headStart),
            ];
        }
        return newItem;
    });
};
/**
 * 把经过 vueRoutes 处理过的 routes 转换成用path作为key的json，并统一增加了parentPath
 * @param vueRoutesData 经过 vueRoutes 处理过的 routes
 * @returns PathJsonRoutesDataItem
 */
export const jsonPathVueRoutes = (vueRoutesData) => {
    const jsonRoutes = {};
    function forRoute(routesData, parentPath) {
        const len = routesData.length;
        for (let index = 0; index < len; index++) {
            const item = routesData[index];
            const pPath = (item.parentPath && item.parentPath.length > 0) ? item.parentPath : parentPath;
            const newItem = {
                ...item,
                parentPath: [...pPath]
            };
            jsonRoutes[item.path] = newItem;
            if (item.children) {
                forRoute(item.children, [...pPath, item.path]);
            }
        }
    }
    forRoute(vueRoutesData, []);
    return jsonRoutes;
};
/**
 * 批量设置route.meta值
 * @param routesData routes
 */
export const routesSetMeta = (routesData) => {
    return routesData.map(item => {
        const { children, tabNavType, meta } = item;
        const newItem = {
            ...item,
            meta: {
                ...meta,
                // 自定义设置的 meta 值 S
                tabNavType: tabNavType || 'path',
            }
        };
        if (item.children) {
            const itemChildren = children || [];
            newItem.children = [
                ...routesSetMeta(itemChildren),
            ];
        }
        return newItem;
    });
};
/**
 * 根据 自定义传入权限名 判断当前用户是否有权限
 * @param userRoles 用户的权限
 * @param roles 自定义权限名
 */
export const hasPermissionRouteRoles = (userRoles, roles) => {
    if (userRoles.includes('admin')) {
        return true;
    }
    if (typeof roles === 'undefined') {
        return true;
    }
    if (typeof roles === 'string') {
        return userRoles.includes(roles);
    }
    if (roles instanceof Array && roles.length > 0) {
        return roles.some(role => userRoles.includes(role));
    }
    return false;
};
/**
 * 根据 route.roles 判断当前用户是否有权限
 * @param roles 用户的权限
 * @param route 当前路由
 */
export const hasPermission = (roles, route) => {
    if (roles.includes('admin')) {
        return true;
    }
    if (route.roles) {
        return route.roles.some(role => roles.includes(role));
        //return roles.some(role => route.roles?.includes(role));
    }
    return true;
};
/**
 * 根据用户权限 获取 对应权限菜单
 * @param roles 用户的权限
 * @param routes 框架对应路由
 */
export const getPermissionMenuData = (roles, routes) => {
    const menu = [];
    for (let index = 0, len = routes.length; index < len; index += 1) {
        const element = { ...routes[index] };
        if (hasPermission(roles, element)) {
            if (element.children) {
                element.children = getPermissionMenuData(roles, element.children);
            }
            menu.push(element);
        }
    }
    return menu;
};
/**
 * 判断tabNav，对应的route是否相等
 * @param route1 vue-route
 * @param route2 vue-route
 * @param type 判断规则
 * @returns
 */
export const equalTabNavRoute = (route1, route2, type = 'path') => {
    let is = false;
    switch (type) {
        case 'querypath': // path + query
            is = equalObject(route1.query, route2.query) && route1.path === route2.path;
            break;
        default: // path
            is = route1.path === route2.path;
            break;
    }
    return is;
};
//# sourceMappingURL=routes.js.map