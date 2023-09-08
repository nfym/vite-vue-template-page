import { createApp } from 'vue'
import App from './App.vue'
import setupRoute from './router'
import setupComponent from '@/utils/setupComponents'
import '@/styles/index.less'

async function bootstrap() {
  const app = createApp(App)

  // 注册全局组件
  setupComponent(app)

  setupRoute(app)

  app.mount('#app')
}

bootstrap()
