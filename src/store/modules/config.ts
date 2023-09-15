/*
 * @Description: 系统配置 store
 * @Date: 2023-09-15 14:32:32
 * @LastEditTime: 2023-09-15 18:03:05
 */
import { defineStore } from 'pinia'
import { getAppLocalConfig } from '@/utils/cache'
import { ThemeModeEnum, LocaleEnum } from '@/enums/appEnum'

const localConfig = getAppLocalConfig()

export const useAppConfigStore = defineStore('appConfig', {
  state: () => ({
    ...localConfig
  }),
  actions: {
    setTheme(theme: ThemeModeEnum) {
      this.theme = theme
    },
    setLocale(lacale: LocaleEnum) {
      this.locale = lacale
    }
  }
})
