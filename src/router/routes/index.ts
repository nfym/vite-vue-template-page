import type { RouteRecordRaw } from 'vue-router'
export { basicRoutes } from './basic'

// import.meta.glob() 直接引入所有的路由模块
const modules: Recordable<{ default: RouteRecordRaw }> = import.meta.glob(
  './modules/*.ts',
  {
    eager: true
  }
)
export const modulesRoutes: RouteRecordRaw[] = []

// 加入到路由集合中
for (const key in modules) {
  const module = modules[key].default || {}
  modulesRoutes.push(module)
}
