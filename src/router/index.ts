import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import WorkerView from "@/views/work/WorkerView.vue";
import SupervisorView from "@/views/work/SupervisorView.vue";
import DirectorView from "@/views/work/DirectorView.vue";
import AdminView from "@/views/work/AdminView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
    },
    {
      path:'/worker',
      name:'worker',
      component: WorkerView
    },
    {
      path:'/supervisor',
      name:'supervisor',
      component:SupervisorView
    },
    {
      path:'/director',
      name:'director',
      component: DirectorView
    },
    {
      path:'/admin',
      name:'admin',
      component:AdminView
    }
  ]
})

export default router
