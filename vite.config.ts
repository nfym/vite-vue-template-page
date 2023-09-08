import { defineConfig, loadEnv } from 'vite'
import createVitePlugins from './build/plugin'
import { wrapperEnv } from './build/utils'
import { OUTPUT_DIR } from './build/constant'
import type { UserConfig, ConfigEnv } from 'vite'

// 指定解析路径
import { resolve } from 'path'
const pathResolve = (dir: string) => resolve(__dirname, dir)

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()

  // 获取环境变量
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)
  const { VITE_PORT, VITE_PUBLIC_PATH, VITE_DROP_CONSOLE, VITE_API_BASE_URL } =
    viteEnv

  const isBuild = command === 'build' // 生产环境

  return {
    plugins: createVitePlugins(viteEnv, isBuild),
    base: VITE_PUBLIC_PATH,
    resolve: {
      // 路径别名
      alias: [
        { find: '@', replacement: pathResolve('src') },
        { find: '#', replacement: pathResolve('types') },
        { find: 'api', replacement: pathResolve('src/api') },
        { find: 'components', replacement: pathResolve('src/components') },
        { find: 'utils', replacement: pathResolve('src/utils') },
        { find: 'styles', replacement: pathResolve('src/styles') },
        // 处理 vue-i18n 的控制台警告信息
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js'
        }
      ]
    },
    server: {
      host: true,
      port: VITE_PORT, // 设置服务启动端口号，如果端口已经被使用，Vite 会自动尝试下一个可用的端口
      open: true, // boolean | string 设置服务启动时是否自动打开浏览器，当此值为字符串时，会被用作 URL 的路径名
      cors: true, // 为开发服务器配置 CORS，配置为允许跨域
      https: false,
      // 设置代理，根据项目实际情况配置
      proxy: {
        '/api': {
          target: VITE_API_BASE_URL, // 后台服务地址
          changeOrigin: true, // 是否允许不同源
          secure: false, // 支持https
          prependPath: false,
          rewrite: (path) => {
            console.log(path)
            return path.replace(/^\/api/, '')
          }
        }
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "@/styles/variable.less";',
          javascriptEnabled: true
        }
      }
    },
    // 生产环境打包配置
    build: {
      outDir: OUTPUT_DIR,
      minify: 'terser',
      terserOptions: {
        compress: {
          keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
          drop_console: VITE_DROP_CONSOLE, // 生产环境去除 console
          drop_debugger: true // 生产环境去除 debugger
        }
      }
    }
  }
})
