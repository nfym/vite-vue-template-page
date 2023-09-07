import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

// 根路由
const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/login'
}

// 登录
const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/system/login/Index.vue')
}

// 404
const PAGE_NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'ErrorPage',
  children: [
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: () => import('@/views/system/exception/Error.vue')
    }
  ]
}

// 不要任何权限的基本路由
const basicRoutes = [RootRoute, LoginRoute, PAGE_NOT_FOUND_ROUTE]

// 创建一个可以被 Vue 应用程序使用的路由实例
const router = createRouter({
  history: createWebHistory(),
  // 应该添加到路由器的初始路由列表。
  routes: basicRoutes,
  // 是否应该禁止尾部斜杠。默认 false
  strict: true
})

// 配置路由器
export default function setupRouter(app: App<Element>) {
  app.use(router)
}
