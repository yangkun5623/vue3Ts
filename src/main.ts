import { createApp } from 'vue';

// 全局样式
import '@/assets/css/global.less';
import 'vxe-table/lib/style.css'
// 引入 Antd
import Antd from 'ant-design-vue';
import VXETable from 'vxe-table'

// 导入 svg
import { importAllSvg } from "@/corePage/components/IconSvg/index";
importAllSvg();

import App from '@/App.vue';
import router from '@/corePage/config/routes';
import store from '@/corePage/config/store';
import i18n from '@/corePage/config/i18n';

import print from 'vue3-print-nb'


const app = createApp(App)
app.use(VXETable)
app.use(store);
app.use(router)
app.use(Antd);
app.use(i18n);
app.use(print);
app.mount('#app');
