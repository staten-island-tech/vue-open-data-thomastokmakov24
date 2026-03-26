import { createRouter, createWebHistory } from 'vue-router'
import FirstCheck from '@/views/FirstCheck.vue'
import FirstChart from '@/views/FirstChart.vue'
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
    }
  ],
})

export default router
