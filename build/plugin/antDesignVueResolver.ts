/*
 * @Description: 自动按需引入组件
 * @Date: 2024-02-21 18:22:18
 */
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default function antDesignVueResolverPlugin() {
  return Components({
    directoryAsNamespace: true,
    resolvers: [
      AntDesignVueResolver({
        importStyle: false // css in js
      })
    ]
  })
}
