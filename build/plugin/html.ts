import { createHtmlPlugin } from 'vite-plugin-html'

export default function configHtmlPlugin() {
  return createHtmlPlugin({
    minify: true,
    inject: {
      data: {
        title: 'my vite app'
      }
    }
  })
}
