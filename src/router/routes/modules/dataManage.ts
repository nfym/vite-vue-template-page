/*
 * @Description: 随便加个模块验证 import.meta.glob() 自动导入模块路由配置
 * @Date: 2023-09-07 15:20:42
 * @LastEditTime: 2023-09-18 11:35:57
 */
import { $t } from '@/hooks/useI18n'
import type { AppRouteRecordRaw } from '@/router/types'

const dataManage: AppRouteRecordRaw = {
  path: '/dataManage',
  name: 'DataManage',
  component: () => import('@/components/basicLayout/Index.vue'),
  redirect: '/dataManage/index',
  meta: {
    isMenu: true,
    hideChildrenInMenu: true,
    icon: 'iconname',
    title: $t('dataManage.title'),
    menuOrderNo: 0
  },
  children: [
    {
      path: 'index',
      name: 'DataList',
      component: () => import('@/views/dataManage/list/Index.vue'),
      meta: {
        isMenu: false
      }
    }
  ]
}

export default dataManage
