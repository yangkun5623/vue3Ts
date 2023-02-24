<template>
  <div  >
    <a-card style="text-align: right">
      <a-button type="primary" v-print="printObj">导出pdf</a-button>
    </a-card>
    <div id="exportPdf" >
      <a-card   >
        <a-descriptions title="User Info" bordered >
          <a-descriptions-item label="Product">Cloud Database</a-descriptions-item>
          <a-descriptions-item label="Billing Mode">Prepaid</a-descriptions-item>
          <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
          <a-descriptions-item label="Order time">2018-04-24 18:00:00</a-descriptions-item>
          <a-descriptions-item label="Usage Time" :span="2">2019-04-24 18:00:00</a-descriptions-item>
          <a-descriptions-item label="Status" :span="3">
            <a-badge status="processing" text="Running" />
          </a-descriptions-item>
          <a-descriptions-item label="Negotiated Amount">$80.00</a-descriptions-item>
          <a-descriptions-item label="Discount">$20.00</a-descriptions-item>
          <a-descriptions-item label="Official Receipts">$60.00</a-descriptions-item>
          <a-descriptions-item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1
            <br />
          </a-descriptions-item>
        </a-descriptions>
      </a-card>
      <a-card   >
        <a-descriptions title="User Info" bordered >
          <a-descriptions-item label="Product">Cloud Database</a-descriptions-item>
          <a-descriptions-item label="Billing Mode">Prepaid</a-descriptions-item>
          <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
          <a-descriptions-item label="Order time">2018-04-24 18:00:00</a-descriptions-item>
          <a-descriptions-item label="Usage Time" :span="2">2019-04-24 18:00:00</a-descriptions-item>
          <a-descriptions-item label="Status" :span="3">
            <a-badge status="processing" text="Running" />
          </a-descriptions-item>
          <a-descriptions-item label="Negotiated Amount">$80.00</a-descriptions-item>
          <a-descriptions-item label="Discount">$20.00</a-descriptions-item>
          <a-descriptions-item label="Official Receipts">$60.00</a-descriptions-item>
          <a-descriptions-item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1
            <br />
          </a-descriptions-item>
        </a-descriptions>
      </a-card>
      <a-card   >
        <a-descriptions title="User Info" bordered >
          <a-descriptions-item label="Product">Cloud Database</a-descriptions-item>
          <a-descriptions-item label="Billing Mode">Prepaid</a-descriptions-item>
          <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
          <a-descriptions-item label="Order time">2018-04-24 18:00:00</a-descriptions-item>
          <a-descriptions-item label="Usage Time" :span="2">2019-04-24 18:00:00</a-descriptions-item>
          <a-descriptions-item label="Status" :span="3">
            <a-badge status="processing" text="Running" />
          </a-descriptions-item>
          <a-descriptions-item label="Negotiated Amount">$80.00</a-descriptions-item>
          <a-descriptions-item label="Discount">$20.00</a-descriptions-item>
          <a-descriptions-item label="Official Receipts">$60.00</a-descriptions-item>
          <a-descriptions-item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1
            <br />
          </a-descriptions-item>
        </a-descriptions>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";

interface SetupType {
  printObj: Object
}
export default {
  name: "index",
  setup(): SetupType {
    const printObj = ref({
      id: "exportPdf",
      popTitle: '&nbsp', // 打印配置页上方标题
      extraHead: '', //最上方的头部文字，附加在head标签上的额外标签,使用逗号分隔
      preview: '', // 是否启动预览模式，默认是false（开启预览模式，可以先预览后打印）
      previewTitle: '', // 打印预览的标题（开启预览模式后出现）,
      previewPrintBtnLabel: '', // 打印预览的标题的下方按钮文本，点击可进入打印（开启预览模式后出现）
      zIndex: '', // 预览的窗口的z-index，默认是 20002（此值要高一些，这涉及到预览模式是否显示在最上面）
      previewBeforeOpenCallback() {
        console.log('previewBeforeOpenCallback')
      }, //预览窗口打开之前的callback（开启预览模式调用）
      previewOpenCallback() {
        console.log('previewOpenCallback')
      }, // 预览窗口打开之后的callback（开启预览模式调用）
      beforeOpenCallback() {
        console.log('beforeOpenCallback')
      }, // 开启打印前的回调事件
      openCallback() {
        console.log('openCallback')
      }, // 调用打印之后的回调事件
      closeCallback() {
        console.log('closeCallback')
      }, //关闭打印的回调事件（无法确定点击的是确认还是取消）
      url: '',
      standard: '',
      extraCss: '',
    })
    return {
      printObj
    }
  }
}
</script>

<style scoped  media="print" lang="less">
@page {
  size: auto;
  margin: 3mm;
}
@media print {
  html {
    background-color: #ffffff;
    height: auto;
    margin: 0px;
  }

  body {
    border: solid 1px #ffffff;
    margin: 10mm 15mm 10mm 15mm;
  }
  table {
    table-layout: auto !important;
  }
}
</style>
