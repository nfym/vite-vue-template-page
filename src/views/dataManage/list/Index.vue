<!--
 * @Description: 列表页，模块首页
 * @Date: 2023-09-07 15:34:23
 * @LastEditTime: 2023-09-11 16:06:33
-->
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from '@/hooks'
export default defineComponent({
  name: 'DataManage',
  setup() {
    const prefixCls = ref('data-manage-list')
    const { locale } = useI18n()

    const toggleLocale = () => {
      locale.value = locale.value == 'en_US' ? 'zh_CN' : 'en_US'
    }

    return {
      prefixCls,
      toggleLocale
    }
  }
})
</script>

<template>
  <main :class="prefixCls">
    <a-button @click="toggleLocale">toggleLocale</a-button>
  </main>
</template>
