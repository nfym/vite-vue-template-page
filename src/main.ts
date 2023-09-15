import { createApp } from 'vue'
import App from './App.vue'
import setupRoute from './router'
import setupStore from './store'
import setupComponent from '@/utils/setupComponents'
import setupI18n from './lang'
import '@/styles/index.less'

async function bootstrap() {
  const app = createApp(App)

  // 配置 store
  setupStore(app)

  // 注册全局组件
  setupComponent(app)

  // 多语言配置
  setupI18n(app)

  // 注册路由
  setupRoute(app)

  app.mount('#app')
}

bootstrap()
