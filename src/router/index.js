import Vue from 'vue'
import Router from 'vue-router'
// 引入header组件
import Datatable from '@/components/DataTable.vue'
import Progress from '@/components/Progress.vue'
import Form from '@/components/Form.vue'
import SplitPanel from '@/components/SplitPanel.vue'
import SidePanel from '@/components/SidePanel.vue'
import ECharts from '@/components/ECharts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/splitpanel'},
    {
      path: '/datatable',
      component: Datatable,
      name: Datatable
    }, {
      path: '/progress',
      component: Progress,
      name: Progress
    }, {
      path: '/form',
      component: Form,
      name: Form
    }, {
      path: '/splitpanel',
      component: SplitPanel,
      name: SplitPanel
    }, {
      path: '/sidepanel',
      component: SidePanel,
      name: SidePanel
    }, {
      path: '/echarts',
      component: ECharts,
      name: ECharts
    }]
})
