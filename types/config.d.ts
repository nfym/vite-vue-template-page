/*
 * @Description: config 目录配置对应声明
 * @Date: 2023-09-15 11:55:41
 * @LastEditTime: 2023-09-15 16:01:18
 */

import { ThemeModeEnum, LocaleEnum } from '@/enums/appEnum'

export interface AppConfig {
  locale: LocaleEnum
  theme: ThemeModeEnum
}
