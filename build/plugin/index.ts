import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteCompression from 'vite-plugin-compression'

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

  //  vite-plugin-compression gzip 压缩 生产环境生成 .gz 文件
  isBuild &&
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    })

  return vitePlugins
}
