<!--甘特图-->
<template>
  <div class="layout-main-conent"  style="background: white">
    <div class="gantt-container"  style="background: white">
      <a-row>
        <a-col :span="6">
          <div class="gantt-tasks">
            <div class="tasks-header">
              <span>生产计划列表</span> |
            </div>
            <div
                v-for="(item, index) in tasks"
                :id="'task-item-' + item.id"
                :key="index"
                :class="{'fill-bg': (index % 2 !== 0), 'task-item': true}"
            >
              {{ item.name }}
            </div>
          </div>
        </a-col>
        <a-col :span="18">
          <!--甘特图-->
          <div class="gantt-target" style="height: 100%"/>
        </a-col>
      </a-row>
    </div>
  </div>

</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'
import Gantt from './gant/frappe-gantt'
export default {
  setup() {
    const vueConfig = reactive({
      tasks: [{
        start: '2022-06-01',
        end: '2022-06-08',
        name: '测试任务1',
        id: '1',
        progress: 0
      },
        {
          start: '2022-06-03',
          end: '2022-06-06',
          name: '测试任务2',
          id: '2',
          progress: 0,
          dependencies: '1'
        },
        {
          start: '2022-06-04',
          end: '2022-06-08',
          name: '测试任务3',
          id: '3',
          progress: 0,
          dependencies: '1'
        },
        {
          start: '2022-06-08',
          end: '2022-06-09',
          name: '测试任务4',
          id: '4',
          progress: 0,
          dependencies: '2'
        },
        {
          start: '2022-06-08',
          end: '2022-06-10',
          name: '测试任务5',
          id: '5',
          progress: 0,
          dependencies: '2'
        },{
          start: '2022-06-01',
          end: '2022-06-08',
          name: '测试任务1',
          id: '6',
          progress: 0
        },
        {
          start: '2022-06-03',
          end: '2022-06-06',
          name: '测试任务2',
          id: '7',
          progress: 0,
          dependencies: '1'
        },
        {
          start: '2022-06-04',
          end: '2022-06-08',
          name: '测试任务3',
          id: '8',
          progress: 0,
          dependencies: '1'
        },
        {
          start: '2022-06-08',
          end: '2022-06-09',
          name: '测试任务4',
          id: '9',
          progress: 0,
          dependencies: '2'
        },
        {
          start: '2022-06-08',
          end: '2022-06-10',
          name: '测试任务5',
          id: '10',
          progress: 0,
          dependencies: '2'
        },{
          start: '2022-06-01',
          end: '2022-06-08',
          name: '测试任务1',
          id: '11',
          progress: 0
        },
        {
          start: '2022-06-03',
          end: '2022-06-06',
          name: '测试任务2',
          id: '12',
          progress: 0,
          dependencies: '1'
        },
        {
          start: '2022-06-04',
          end: '2022-06-08',
          name: '测试任务3',
          id: '13',
          progress: 0,
          dependencies: '1'
        },
        {
          start: '2022-06-08',
          end: '2022-06-09',
          name: '测试任务4',
          id: '14',
          progress: 0,
          dependencies: '2'
        },
        {
          start: '2022-06-08',
          end: '2022-06-10',
          name: '测试任务5',
          id: '15',
          progress: 0,
          dependencies: '2'
        },{
          start: '2022-06-01',
          end: '2022-06-08',
          name: '测试任务1',
          id: '16',
          progress: 0
        },
        {
          start: '2022-06-03',
          end: '2022-06-06',
          name: '测试任务2',
          id: '17',
          progress: 0,
          dependencies: '1'
        },
        {
          start: '2022-06-04',
          end: '2022-06-08',
          name: '测试任务3',
          id: '18',
          progress: 0,
          dependencies: '1'
        },
        {
          start: '2022-06-08',
          end: '2022-06-09',
          name: '测试任务4',
          id: '19',
          progress: 0,
          dependencies: '2'
        },
        {
          start: '2022-06-08',
          end: '2022-06-10',
          name: '测试任务5',
          id: '20',
          progress: 0,
          dependencies: '2'
        }],
      gantt: null
    })
    onMounted(() => {
      const gantt = new Gantt('.gantt-target', vueConfig.tasks, {
        on_click: function(task) {
          console.log('我点击了', task)
        },
        on_date_change: function(task, start, end) {
          console.log(task, start, end)
        },
        on_progress_change: function(task, progress) {
          console.log(task, progress)
        },
        on_view_change: function(mode) {
          console.log(mode)
        },
        view_mode: 'Day',
        language: 'zh'
      })
      console.log('gantt111', gantt)
    })
    return {
      ...toRefs(vueConfig)
    }
  }
}
</script>

<style lang="less" scoped>
@import'./gant/frappe-gantt.css';
.gantt-container {
  background-color: transparent;
  height: 100%;
}
.gantt-tasks {
  background-color: #fff;
}
.task-item {
  height: 38px;
  font-size: 14px;
  padding-left: 15px;
  border-bottom: 2px solid #F5F7F8;
  line-height: 38px;
}
.tasks-header {
  height: 60px;
  padding-left: 15px;
  line-height: 60px;
  border-bottom: 2px solid #E9E9E9;
}
.details-container {
  width: 100px;
}
.fill-bg {
  background-color: #f5f5f5;
}
.task-date .el-date-editor {
  width: 100%;
  margin-top: 5px;
  border-bottom: none;
}
.task-name {
  color: #000;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 90%;
  text-align: left;
}
.task-name:hover {
  color: #8FBC8F;
}
.task-progress {
  margin-top: 5px;
}
</style>
