import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import configHtmlPlugin from './html'
import configWebUpdateNotificationPlugin from './webUpdate'

export default function createVitePlugins(env: ViteEnv, isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [vue()]

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(env))

  // @plugin-web-update-notification/vite
  isBuild && vitePlugins.push(configWebUpdateNotificationPlugin())

  return vitePlugins
}
