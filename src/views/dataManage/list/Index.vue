<!--
 * @Description: 列表页，模块首页
 * @Date: 2023-09-07 15:34:23
 * @LastEditTime: 2023-09-07 15:48:24
-->
<script lang="tsx">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ErrorPage',
  setup() {
    const prefixCls = ref('data-manage-list')

    return {
      prefixCls
    }
  }
})
</script>

<template>
  <main :class="prefixCls">xxxxxxxxx</main>
</template>
