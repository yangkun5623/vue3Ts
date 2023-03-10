<template>
    <div id="indexlayout">
        <left
          :collapsed="collapsed"
          :topNavEnable="topNavEnable"
          :belongTopMenu="belongTopMenu"
          :selectedKeys="selectedKeys"
          :openKeys="leftOpenKeys"
          :menuData="permissionMenuData"
          :onOpenChange="onOpenChange"
        >
        </left>
        <div
          id="indexlayout-right"
          :class="{'fiexd-header': headFixed}"
        >
            <right-top
              :collapsed="collapsed"
              :tabNavEnable="tabNavEnable"
              :topNavEnable="topNavEnable"
              :belongTopMenu="belongTopMenu"
              :toggleCollapsed="toggleCollapsed"
              :breadCrumbs="breadCrumbs"
              :menuData="permissionMenuData"
              :routeItem="routeItem"
            >
            </right-top>
            <div class="indexlayout-right-main">
              <permission :roles="routeItem.roles">
                  <router-view></router-view>
<!--                  <router-view  v-slot="{ Component }">-->
<!--                    <keep-alive  :include="tabNavList.map(w => w.route.path)">-->
<!--                      <component :is="Component" />-->
<!--                    </keep-alive>-->
<!--                  </router-view>-->
                </permission>
<!--                <right-footer></right-footer>-->
            </div>
        </div>


<!--        <settings></settings>-->

    </div>
</template>
<script lang="ts">
import { defineComponent, computed, ComputedRef, watch, ref, Ref, nextTick } from "vue";
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { StateType as GlobalStateType } from '@/corePage/store/global';
import { StateType as UserStateType } from "@/corePage/store/user";
import {
  PathJsonRoutesDataItem, vueRoutes, jsonPathVueRoutes, RoutesDataItem, getJsonRouteItem, getSelectLeftMenuPath,
  getRouteBelongTopMenu, getBreadcrumbRoutes,
  BreadcrumbType, getPermissionMenuData, TabNavItem
} from '@/corePage/utils/routes';
import { mergeUnique as ArrayMergeUnique } from '@/corePage/utils/array';
import useTitle from '@/composables/useTitle';
import IndexLayoutRoutes from '../menusData/index';
import Permission from '@/corePage/components/Permission/index.vue';
import Left from '@/corePage/layouts/IndexLayout/components/Left.vue';
import RightTop from '@/corePage/layouts/IndexLayout/components/RightTop.vue';
// import RightFooter from '@/layouts/IndexLayout/components/RightFooter.vue';
// import Settings from '@/layouts/IndexLayout/components/Settings.vue';

interface IndexLayoutSetupData {
  collapsed: ComputedRef<boolean>;
  toggleCollapsed: () => void;
  tabNavEnable: ComputedRef<boolean>;
  topNavEnable: ComputedRef<boolean>;
  belongTopMenu: ComputedRef<string>;
  headFixed: ComputedRef<boolean>;
  selectedKeys: ComputedRef<string[]>;
  leftOpenKeys: Ref<string[]>;
  breadCrumbs: ComputedRef<BreadcrumbType[]>;
  permissionMenuData: ComputedRef<RoutesDataItem[]>;
  onOpenChange: (key: any) => void;
  routeItem: ComputedRef<RoutesDataItem>;
  tabNavList: ComputedRef<TabNavItem[]>
}

export default defineComponent({
    name: 'IndexLayout',
    components: {
        Permission,
        Left,
        RightTop
    },
    setup(): IndexLayoutSetupData {
      const store = useStore<{
        global: GlobalStateType;
        user: UserStateType;
      }>();
      const route = useRoute();

      // ??????????????????
      const menuData: RoutesDataItem[] = vueRoutes(IndexLayoutRoutes);

      // ???????????????????????????json??????????????????parentPath
      const jsonPathRoutes: PathJsonRoutesDataItem = jsonPathVueRoutes(menuData);

      // ???????????? item
      const routeItem = computed<RoutesDataItem>(()=> getJsonRouteItem(route.path, jsonPathRoutes));

      // ??????????????????
      const permissionMenuData = computed<RoutesDataItem[]>(()=> getPermissionMenuData(store.state.user.currentUser.roles, menuData));

      // ???????????????????????????path
      const belongTopMenu = computed<string>(()=>getRouteBelongTopMenu(routeItem.value))

      // ????????????
      const collapsed = computed<boolean>(()=> store.state.global.collapsed);
      const toggleCollapsed = (): void => {
        store.commit('global/changeLayoutCollapsed', !collapsed.value);
      }

      // ????????????tabNav????????????
      const tabNavEnable = computed<boolean>(()=> store.state.global.tabNavEnable);

      // ??????????????????????????????
      const topNavEnable = computed<boolean>(()=> store.state.global.topNavEnable);

      // ????????????????????????
      const headFixed = computed<boolean>(()=> store.state.global.headFixed);


      // ??????????????????key
      const selectedKeys = computed<string[]>(()=>{
        const selectedKey = getSelectLeftMenuPath(routeItem.value);
        return [selectedKey]
      });

      // ??????????????????keys
      const leftOpenKeys = ref<string[]>(routeItem.value.parentPath || []);
      watch([routeItem,collapsed],()=>{
        const parentPath = routeItem.value.parentPath || [];
        if (parentPath.length && !collapsed.value) {
          leftOpenKeys.value = ArrayMergeUnique<string>(leftOpenKeys.value, parentPath);
        } else {
          nextTick(()=> {
            leftOpenKeys.value =[];
          })
        }
      })

      // ????????????????????????
      const onOpenChange = (key: any) => {
        leftOpenKeys.value = key;
      }

      // ???????????????
      const breadCrumbs = computed<BreadcrumbType[]>(() => getBreadcrumbRoutes(route.path, jsonPathRoutes));

      // ??????title
      useTitle(routeItem);

      const tabNavList = computed<TabNavItem[]>(()=> store.state.global.headTabNavList);


      return {
        collapsed,
        toggleCollapsed,
        tabNavEnable,
        topNavEnable,
        belongTopMenu,
        headFixed,
        selectedKeys,
        leftOpenKeys,
        breadCrumbs,
        permissionMenuData,
        onOpenChange,
        routeItem,
        tabNavList
      }
    }
})
</script>
<style lang="less">
@import './css/index';
</style>
