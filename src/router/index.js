import { createRouter, createWebHistory } from 'vue-router'
import BlogHome from '../views/BlogHome.vue'
import BlogPost from '../views/BlogPost.vue'
import BlogTopic from '../views/BlogTopic.vue'

const routes = [
  {
    path: '/',
    name: 'blog-home',
    component: BlogHome
  },
  {
    path: '/technology',
    name: 'technology',
    component: BlogTopic
  },
  {
    path: '/economic',
    name: 'economic',
    component: BlogTopic
  },
  {
    path: '/philosophy',
    name: 'philosophy',
    component: BlogTopic
  },
  {
    path: '/orography',
    name: 'orography',
    component: BlogTopic
  },
  {
    path: '/me',
    name: 'me',
    component: BlogHome
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: BlogPost
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

export default router
