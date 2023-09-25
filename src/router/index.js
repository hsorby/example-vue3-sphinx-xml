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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/basic/:pageName*',
      name: 'basic',
      component: () => import('../views/BasicView.vue')
    },
    {
      path: '/reference/:pageName*',
      name: 'reference',
      component: () => import('../views/ReferenceView.vue')
    },
    {
      path: '/multitier/:pageName*',
      name: 'multitier',
      component: () => import('../views/MultiTierView.vue')
    },
    {
      path: '/offsetreference/main/:pageName*',
      name: 'offsetreference-main',
      component: () => import('../views/OffsetReferenceView.vue')
    },
    {
      path: '/offsetreference/biblio/:pageName*',
      name: 'offsetreference-biblio',
      component: () => import('../views/OffsetReferenceView.vue')
    }
  ]
})

export default router
