import { createRouter, createWebHistory } from 'vue-router'
import FirstCheck from '@/views/FirstCheck.vue'
import FirstChart from '@/views/FirstChart.vue'
import AvgChart from '@/views/AvgChart.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'FirstCheck',
      component: FirstCheck
    },
    {
      path: '/winston1',
      name: 'FirstChart',
      component: FirstChart
    }, {
      path: '/avg',
      name: 'AvgChart',
      component: AvgChart
    }
  ],
})

export default router 
