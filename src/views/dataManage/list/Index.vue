<!--
 * @Description: 列表页，模块首页
 * @Date: 2023-09-07 15:34:23
 * @LastEditTime: 2023-09-07 18:20:25
-->
<script lang="ts">
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
  <main :class="prefixCls">
    <a-button>Add</a-button>
  </main>
</template>
