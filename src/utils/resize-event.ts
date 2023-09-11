import ResizeObserver from 'resize-observer-polyfill'

// 自定义HTML元素
type CustomizedHTMLElement<T> = HTMLElement & T

export type ResizableElement = CustomizedHTMLElement<{
  __resizeListeners__: Array<(...args: unknown[]) => unknown>
  __ro__: ResizeObserver
}>

// 如果不是页面应用,就没必要监听窗口变化
const isServer = typeof window === 'undefined'

// 当监听到元素 Size 变化后,执行的方法
const resizeHandler = function (entries: ResizeObserverEntry[]) {
  // 循环匹配的元素
  for (const entry of entries) {
    // 将元素的__resizeListeners__字段下的方法都执行一遍
    const listeners =
      (entry.target as ResizableElement).__resizeListeners__ || []
    if (listeners.length) {
      listeners.forEach((fn) => {
        fn()
      })
    }
  }
}

// 添加元素 Size 变化的监听方法
export const addResizeListener = function (
  element: ResizableElement,
  fn: (...args: unknown[]) => unknown
): void {
  // 如果不是页面应用就返回
  if (isServer) return
  // 如果元素的__resizeListeners__字段不存在,就说明还没有注册 resize-observer-polyfill
  if (!element.__resizeListeners__) {
    // 设置该字段
    element.__resizeListeners__ = []
    // 在元素的__ro__字段上创建一个 resize-observer-polyfill 实例
    element.__ro__ = new ResizeObserver(resizeHandler)
    // 并启动元素的__ro__监听
    element.__ro__.observe(element)
  }
  // 将监听事件方法添加到元素的__resizeListeners__字段下
  element.__resizeListeners__.push(fn)
}

// 删除监听方法
export const removeResizeListener = function (
  element: ResizableElement,
  fn: (...args: unknown[]) => unknown
): void {
  if (!element || !element.__resizeListeners__) return
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1)
  if (!element.__resizeListeners__.length) {
    element.__ro__.disconnect()
  }
}

// 手动触发window的resize事件
export function triggerWindowResize() {
  // resize事件只有window的大小改变了才会触发,这里提供手动触发方法
  // 通常可能在折叠组件之类的dom有变化的组件中有使用需要

  // 创建一个事件,参数表示事件类型
  const event = document.createEvent('HTMLEvents')

  // 定义事件名为'resize'.
  // 第二个参数:是Boolean决定该事件是否应该冒泡通过事件链与否。设置后，只读属性Event.bubbles 将提供其值。
  // 第三个参数:是Boolean定义该事件是否可以取消。设置后，只读属性Event.cancelable将提供其值。
  event.initEvent('resize', true, true)
  ;(event as any).eventType = 'message'
  // 让 window 触发这个事件
  window.dispatchEvent(event)
}
