/**
 * 这里存放一些零散的全局类型，无需引入直接在 .vue 、.ts 、.tsx 文件使用即可获得类型提示
 */

// 分页
interface PaginationBase<T> {
  total: number
  rows: T[]
}

// 字典
interface Dictionary {
  label: string
  value: string
}

declare type Recordable<T = any> = Record<string, T>

type Simplify<T> = {
  [P in keyof T]: T[P]
}

type SetOptional<T, K extends keyof T> = Simplify<
  Partial<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>
>
