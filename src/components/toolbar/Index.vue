<!--
 * @Description:
 * @Date: 2023-09-11 17:21:44
 * @LastEditTime: 2023-09-11 17:54:30
-->
<template>
  <div :class="prefixCls">
    <a-space :size="spaceSize" :direction="direction">
      <a-button
        v-for="item in props.iconData"
        v-bind="$attrs"
        :key="item.icon"
        :disabled="item.disabled"
        :title="item.title"
        @click="item.func"
      >
        <template #icon>
          <em :class="item.icon"></em>
        </template>
      </a-button>
    </a-space>
  </div>
</template>

<script setup lang="ts">
import { ref, useAttrs } from 'vue'

interface Item {
  disabled?: boolean
  icon: string
  func?: any
  title?: string
}

interface Props {
  spaceSize?: 'small' | 'middle' | 'large' | number
  direction?: 'vertical' | 'horizontal'
  iconData?: Item[]
}

const props = withDefaults(defineProps<Props>(), {
  spaceSize: 'middle',
  direction: 'horizontal',
  iconData: () => [
    {
      icon: 'ri-sun-line'
    }
  ]
})

const prefixCls = ref('comp-toolbar')

// 透传 a-button 的 Props
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const attrs = useAttrs()
</script>

<style scoped lang="less">
@prefix-cls: ~'comp-toolbar';

.@{prefix-cls} {
  position: relative;
}
</style>
