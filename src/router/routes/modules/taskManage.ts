import { $t } from '@/hooks/useI18n'
import type { AppRouteRecordRaw } from '@/router/types'

const taskManage: AppRouteRecordRaw = {
  path: '/taskManage',
  name: 'TaskManage',
  component: () => import('@/components/basicLayout/Index.vue'),
  redirect: '/taskManage/index',
  meta: {
    isMenu: true,
    hideChildrenInMenu: false,
    icon: 'iconname',
    title: $t('taskManage.title'),
    menuOrderNo: 1
  },
  children: [
    {
      path: 'index',
      name: 'TaskList',
      component: () => import('@/views/taskManage/list/Index.vue'),
      meta: {
        isMenu: true,
        title: $t('taskManage.title')
      }
    }
  ]
}

export default taskManage
