import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:viewRoute',
      name: 'view',
      component: () => import('../views/EachView.vue'),
      children: [
        {
          path: '',
          name: 'categories',
          component: () => import('../components/CategoryComponent.vue')
        },
        {
          path: ':category',
          name: 'category',
          component: () => import('../components/CategoryComponent.vue')
        }
      ]
    }
  ]
})

export default router
