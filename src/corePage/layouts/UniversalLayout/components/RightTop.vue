<template>
  <div id="universallayout-right-top" :class="{
    'fiexd': headFixed,
    'narrow': collapsed,
    'tabNavEnable': !tabNavEnable,
    'navModeHorizontal': navMode==='horizontal'
    }">
    <div class="universallayout-right-top-header">
      <div v-if="navMode==='inline'" class="universallayout-right-top-top">
          <div @click="toggleCollapsed" class="universallayout-flexible">
            <icon-svg v-if="collapsed" type="menu-unfold"></icon-svg>
            <icon-svg v-else type="menu-fold"></icon-svg>
          </div>
          <div class="universallayout-top-menu">
              <div>
                  <bread-crumbs class="breadcrumb" :list="breadCrumbs"></bread-crumbs>
              </div>
          </div>
          <div class="universallayout-top-menu-right">

              <right-top-message />

              <right-top-user />

              <select-lang class="universallayout-top-selectlang" />

              <settings></settings>

          </div>
      </div>

      <div v-else class="universallayout-right-top-top menu">
          <div class="universallayout-right-top-logo">
              <router-link to="/" class="logo-url">
                  <img alt="" src="../../../../assets/images/logo.png" width="30">
                  <h3 class="logo-title">AdminAntdVue</h3>
              </router-link>
          </div>
          <div class="universallayout-top-menu">
              <sider-menu
                :menu-data="menuData"
                :route-item="routeItem"
                :theme="theme"
                mode="horizontal">
              </sider-menu>
          </div>
          <div class="universallayout-top-menu-right">

              <right-top-message />

              <right-top-user />

              <select-lang class="universallayout-top-selectlang" />

              <settings></settings>

          </div>
      </div>
      <right-tab-nav v-if="tabNavEnable" :route-item="routeItem"></right-tab-nav>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { withDefaults, defineProps, computed, toRefs } from "vue"
import { useStore } from "vuex"
import { StateType as GlobalStateType } from '@/corePage/store/global'
import { RoutesDataItem, BreadcrumbType } from '@/corePage/utils/routes'
import IconSvg from "@/corePage/components/IconSvg/index"
import BreadCrumbs from '@/corePage/components/BreadCrumbs/index.vue'
import SelectLang from '@/corePage/components/SelectLang/index.vue'
import SiderMenu from "./SiderMenu.vue"
import RightTopMessage from './RightTopMessage.vue'
import RightTopUser from './RightTopUser.vue'
import RightTabNav from './RightTabNav.vue'
import Settings from './Settings.vue'

interface Props {
  menuData: RoutesDataItem[];
  routeItem: RoutesDataItem;
  breadCrumbs: BreadcrumbType[];
}

const props = withDefaults(defineProps<Props>(), {})
const { menuData, routeItem, breadCrumbs } = toRefs(props)


const store = useStore<{global: GlobalStateType;}>()

// ????????????
const theme = computed<any>(()=> store.state.global.theme)

// ????????????
const navMode = computed(()=> store.state.global.navMode)

// ??????????????????
const headFixed = computed(()=> store.state.global.headFixed)

// ????????????tabNav????????????
const tabNavEnable = computed<boolean>(()=> store.state.global.tabNavEnable);

// ????????????
const collapsed = computed<boolean>(()=> store.state.global.collapsed)
const toggleCollapsed = (): void => {
  store.commit('global/changeLayoutCollapsed', !collapsed.value)
}

</script>
