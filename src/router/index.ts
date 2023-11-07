import { type RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '主页',
        },
      },
      {
        path: '/movie',
        name: 'Movie',
        component: () => import('@/views/movie/index.vue'),
        meta: {
          title: 'MV',
        },
      },
      {
        path: '/message',
        name: 'Message',
        component: () => import('@/views/message/index.vue'),
        meta: {
          title: '消息',
        },
      },
      {
        path: '/my',
        name: 'My',
        component: () => import('@/views/my/index.vue'),
        meta: {
          title: '我的',
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
