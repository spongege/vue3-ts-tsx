import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home')
const About = () => import('../views/About')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
