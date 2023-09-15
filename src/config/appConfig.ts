import type { AppConfig } from '#/config'
import { ThemeModeEnum, LocaleEnum } from '@/enums/appEnum'

export const LOCALE: { [key: string]: LocaleEnum } = {
  ZH_CN: LocaleEnum.ZH_CN,
  EN_US: LocaleEnum.EN_US
}

// 系统默认设置
export const appConfig: AppConfig = {
  // 语言
  locale: LocaleEnum.ZH_CN,
  // 主题
  theme: ThemeModeEnum.LIGHT
}
