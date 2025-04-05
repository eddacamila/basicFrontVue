import { createRouter, createWebHistory } from 'vue-router'
import MyLogin from '@/components/MyLogin.vue'
import MyDashboard from '@/components/MyDashboard.vue'
import AdminView from '@/components/AdminView.vue'
import VentasView from '@/components/TenderosView.vue'

const routes = [
  { path: '/', component: MyLogin },
  { path: '/dashboard', component: MyDashboard },
  { path: '/admin', component: AdminView },
  { path: '/ventas', component: VentasView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
