/*
 * @Description: 全局注册 antd 组件
 * @Date: 2023-09-07 17:36:41
 * @LastEditTime: 2023-09-07 18:20:39
 */
import type { App } from 'vue'
import { Button, Menu, Space, Row } from 'ant-design-vue'

export default function setupAntComponent(app: App) {
  app.use(Button)
  app.use(Menu)
  app.use(Space)
  app.use(Row)
}
