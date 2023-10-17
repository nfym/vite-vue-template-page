/*
 * @Description: 项目构建相关工具方法
 * @Date: 2023-09-04 16:37:22
 * @LastEditTime: 2023-09-08 11:01:34
 */
/**
 * @description: loadEnv 获取环境变量都为 string. 此函数保留 boolean、number 等原本类型
 * @param {Recordable} envConf
 */
export function wrapperEnv(envConf: Recordable): ViteEnv {
  const ret: any = {}

  for (const envName of Object.keys(envConf)) {
    // 获取变量的值
    let realName = envConf[envName].replace(/\\n/g, '\n')

    // 恢复 boolean 值
    realName =
      realName === 'true' ? true : realName === 'false' ? false : realName

    // 恢复 number 值
    if (envName === 'VITE_PORT') {
      realName = Number(realName)
    }
    if (envName === 'VITE_PROXY' && realName) {
      try {
        realName = JSON.parse(realName.replace(/'/g, '"'))
      } catch (error) {
        realName = ''
      }
    }
    ret[envName] = realName
    if (typeof realName === 'string') {
      process.env[envName] = realName
    } else if (typeof realName === 'object') {
      process.env[envName] = JSON.stringify(realName)
    }
  }
  return ret
}
