import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkoutView from '../views/WorkoutView.vue'
import FriendView from '../views/FriendView.vue'
import HistoryView from '../views/FriendView.vue'
import AdminView from '../views/AdminView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../components/Login.vue'
import RegistrationView from '../components/Registration.vue'
import ForgotPasswordView from '../components/ForgotPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/workouts',
      name: 'workouts',
      component: WorkoutView
    },
    {
      path: '/friendsworkouts',
      name: 'friends workouts',
      component: FriendView
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../components/Registration.vue')
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('../components/ForgotPassword.vue')
    }

  ]
})

export default router
