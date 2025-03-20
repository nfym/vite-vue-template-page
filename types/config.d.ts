/*
 * @Description: 对应 src/config 目录配置声明
 * @Date: 2023-09-15 11:55:41
 */

import { ThemeModeEnum, LocaleEnum } from '@/enums'

export interface AppConfig {
  locale: LocaleEnum
  themeMode: ThemeModeEnum
  themeConfig: Record<string, string>
}
