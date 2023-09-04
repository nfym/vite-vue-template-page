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
