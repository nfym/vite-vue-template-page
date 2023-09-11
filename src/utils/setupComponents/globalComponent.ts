/*
 * @Description: 全局注册自定义的组件
 * @Date: 2022-11-28 10:46:51
 * @LastEditTime: 2023-09-11 09:52:39
 */

import type { App } from 'vue'
import Scrollbar from 'components/scrollbar/Index.vue'
// import Toolbar from 'components/toolbar/Index.vue'
// import FooterBar from 'components/footerBar/Index.vue'

export default function setupGlobalComponent(app: App) {
  app.component('CompScrollbar', Scrollbar)
  // app.component('CompToolbar', Toolbar)
  // app.component('CompFooterBar', FooterBar)
}
