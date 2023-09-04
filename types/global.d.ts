declare interface ViteEnv {
  // Dev
  VITE_PORT: number // dev 启动端口
  VITE_USE_MOCK: boolean
  VITE_USE_PWA: boolean
  // Build
  VITE_PUBLIC_PATH: string // 打包公共基础路径
  VITE_API_BASE_URL: string // 接口请求地址
  VITE_GLOB_APP_TITLE: string
  VITE_GLOB_APP_SHORT_NAME: string
  VITE_USE_CDN: boolean
  VITE_DROP_CONSOLE: boolean
  VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
  VITE_LEGACY: boolean
  VITE_USE_IMAGEMIN: boolean
  VITE_GENERATE_UI: string
}

declare type Recordable<T = any> = Record<string, T>
