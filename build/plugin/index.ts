import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import configHtmlPlugin from './html'
import configWebUpdateNotificationPlugin from './webUpdate'
import configVisualizerConfig from './visualizer'

export default function createVitePlugins(env: ViteEnv, isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [vue(), vueJsx()]

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(env))

  // rollup-plugin-visualizer
  vitePlugins.push(configVisualizerConfig())

  // @plugin-web-update-notification/vite
  isBuild && vitePlugins.push(configWebUpdateNotificationPlugin())

  return vitePlugins
}
