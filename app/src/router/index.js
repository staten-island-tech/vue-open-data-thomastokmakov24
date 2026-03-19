import { createRouter, createWebHistory } from 'vue-router'
import FirstCheck from '@/views/FirstCheck.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'FirstCheck',
      component: FirstCheck
    }
  ],
})

export default router
