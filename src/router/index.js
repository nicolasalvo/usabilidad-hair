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
      path: '/peluqueria',
      name: 'peluqueria',
      component: () => import('../views/PeluqueriaView.vue')
    },
    {
      path: '/estetica',
      name: 'estetica',
      component: () => import('../views/EsteticaView.vue')
    },
    {
      path: '/experiencias',
      name: 'experiencias',
      component: () => import('../views/ExperienciasView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue')
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
