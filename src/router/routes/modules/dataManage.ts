/*
 * @Description: 随便加个模块验证 import.meta.glob() 自动导入模块路由配置
 * @Date: 2023-09-07 15:20:42
 * @LastEditTime: 2023-09-07 16:32:38
 */
import type { RouteRecordRaw } from 'vue-router'

const about: RouteRecordRaw = {
  path: '/dataManage',
  name: 'DataManage',
  // component: () => import('@/components/basicLayout/Index.vue'),
  redirect: '/dataManage/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'iconname',
    // title: t('dataManage.title'),
    menuOrderNo: 0
  },
  children: [
    {
      path: 'index',
      name: 'DataList',
      component: () => import('@/views/dataManage/list/index.vue'),
      meta: {
        hideMenu: true
      }
    }
  ]
}

export default about
