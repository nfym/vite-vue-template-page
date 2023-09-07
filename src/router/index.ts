/*
 * @Description: 创建路由
 * @Date: 2023-09-06 16:21:03
 * @LastEditTime: 2023-09-07 16:34:36
 */
import { createRouter, createWebHistory } from 'vue-router'
import { basicRoutes, modulesRoutes } from './routes'
import type { App } from 'vue'

// 创建一个可以被 Vue 应用程序使用的路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  // 应该添加到路由器的初始路由列表。
  routes: [...basicRoutes, ...modulesRoutes],
  // 是否应该禁止尾部斜杠。默认 false
  strict: true
})

// 配置路由器
export default function setupRouter(app: App<Element>) {
  app.use(router)
}
