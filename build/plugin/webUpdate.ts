import { webUpdateNotice } from '@plugin-web-update-notification/vite'

export default function configWebUpdateNotificationPlugin() {
  return webUpdateNotice({
    versionType: 'build_timestamp',
    checkInterval: 0,
    logVersion: true,
    notificationProps: {
      title: '标题',
      description: '系统更新, 请刷新页面',
      buttonText: '刷新',
      dismissButtonText: '忽略'
    }
  })
}
