<template>
  <div class="layout-main-conent">
    <a-card title="VxeTable" :bordered="false">
      <template #extra>
        <vxe-button @click="go">官网</vxe-button>
        <vxe-button @click="openExportEvent">高级导出</vxe-button>
      </template>
      <vxe-table
          ref="xTable1"
          :export-config="{}"
          :align="allAlign"
          :data="tableData1">
        <vxe-column type="checkbox" width="60"></vxe-column>
        <vxe-column type="seq" width="60"></vxe-column>
        <vxe-column field="name" title="Name"></vxe-column>
        <vxe-column field="sex" title="Sex"></vxe-column>
        <vxe-column field="age" title="Age"></vxe-column>
      </vxe-table>
    </a-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import {VxeButtonEvents, VxeTableInstance} from "vxe-table";
interface UserVO {
  id: number;
  name: string;
  role: string;
  sex: string;
  age: number;
  address: string;
}
export default defineComponent({
  setup () {
    const allAlign = ref(null)
    const xTable1 = ref<VxeTableInstance>()
    const tableData1 = ref<UserVO[]>([
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ])
    const go = () => {
      window.open('https://vxetable.cn/#/table/start/install')
    }
    const openExportEvent: VxeButtonEvents.Click = () => {
      const $table:any = xTable1.value
      $table.openExport()
    }

    return {
      allAlign,
      tableData1,
      go,
      openExportEvent,
      xTable1,
    }
  }
})
</script>

<style scoped>

</style>
