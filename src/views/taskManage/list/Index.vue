<!--
 * @Description: 列表页，模块首页
 * @Date: 2023-09-07 15:34:23
 * @LastEditTime: 2023-09-18 10:40:45
-->
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'TaskManage',
  setup() {
    const prefixCls = ref('task-manage-list')

    return {
      prefixCls
    }
  }
})
</script>

<template>
  <main :class="prefixCls">list</main>
</template>
