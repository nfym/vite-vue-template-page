/**
 * Plugin to minimize and use ejs template syntax in index.html.
 * https://github.com/anncwb/vite-plugin-html
 */
import { createHtmlPlugin } from 'vite-plugin-html'

export default function configHtmlPlugin(env: ViteEnv) {
  return createHtmlPlugin({
    minify: true,
    inject: {
      data: {
        title: env.VITE_GLOB_APP_TITLE
      }
    }
  })
}
