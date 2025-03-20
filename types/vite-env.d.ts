/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<
    Record<string, never>,
    Record<string, never>,
    any
  >
  export default component
}

declare namespace JSX {
  interface IntrinsicElements {
    [elem: string]: any
  }
}

declare interface ViteEnv {
  VITE_APP_TITLE: string // 系统名称
  VITE_PORT: number // dev 启动端口

  VITE_API_BASE_URL: string // 接口请求地址
  VITE_API_WEBSOCKET_URL: string // websocket 请求地址

  VITE_DROP_CONSOLE: boolean // 打包是否移除 console
}

type ImportMetaEnv = ViteEnv

interface ImportMeta {
  readonly env: ImportMetaEnv
}
