import type { InjectionKey } from 'vue'
export const HEAD_BAR_MINI_HEIGHT = 48
export const HEAD_BAR_SHOW_TIT_MINI_HEIGHT = 80
export const HEAD_BAR_HEIGHT = 64

export enum ThemeModeEnum {
  DARK = 'dark',
  LIGHT = 'light'
}

export const themeConfig = {
  primary: '#1677ff',
  warning: '#faad14',
  success: '#52c41a',
  error: '#ff4d4f'
}

export enum LocaleEnum {
  ZH_CN = 'zh_CN',
  EN_US = 'en_US'
}

// provide/inject
// reload
export const RELOAD: InjectionKey<() => void> = Symbol()
// resetScrollbar
export const RESET_SCROLLBAR: InjectionKey<() => void> = Symbol()
