import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SingnupView.vue'
import TodoView from '../views/todosView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    
  },

  {
    path: '/signup',
    name: 'signUp',
    component: SignUpView
  },
  {
    path: '/todos',
    name: 'todo',
    component: TodoView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
