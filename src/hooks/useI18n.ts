import { useI18n } from 'vue-i18n'

export const $t = (key: string) => key

export default function () {
  const i18n = useI18n()
  return {
    ...i18n,
    $t: i18n.t
  }
}
