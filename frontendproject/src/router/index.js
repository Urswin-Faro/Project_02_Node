import { createRouter, createWebHistory } from 'vue-router'
import EmployeeInfoView from '../views/EmployeeInfoView.vue'
import DummyView from '@/views/dummyView.vue'

const routes = [
  {
    path: '/employ',
    name: 'employ',
    component: DummyView
  },
  {
    path: '/information',
    name: 'information',
    component: EmployeeInfoView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EmployeePayrollView.vue')
  }
  
  ,{
    path: '/attendances',
    name: 'attendances',
    component: () => import('../views/AttendanceView.vue')
  }
  
  ,{
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
