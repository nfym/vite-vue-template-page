import { createApp } from 'vue'
import App from './App.vue'
import setupRoute from './router'
import '@/styles/style.css'

const app = createApp(App)
setupRoute(app)
app.mount('#app')
