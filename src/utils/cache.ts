/*
 * @Description: localStorage 相关方法
 * @Date: 2023-09-15 14:41:31
 * @LastEditTime: 2023-09-15 18:23:18
 */
import { appConfig } from '@/config/appConfig'
import { APP_CONFIG_KEY } from '@/enums/cacheEnum'
import type { AppConfig } from '#/config'

// 获取 App 本地配置
export function getAppLocalConfig() {
  const localAppConfig: AppConfig = JSON.parse(
    window.localStorage.getItem(APP_CONFIG_KEY) || '{}'
  )

  // 默认国际化,兼容'zh-CN'类型
  localAppConfig.locale = localAppConfig.locale || appConfig.locale

  return localAppConfig
}

// 存储 App 本地配置
export function setAppLocalConfig(localAppConfig: AppConfig) {
  window.localStorage.setItem(APP_CONFIG_KEY, JSON.stringify(localAppConfig))
}

// 批量删除缓存
export function removeStorage(...keys: string[]) {
  keys.forEach((key) => window.localStorage.removeItem(key))
}
