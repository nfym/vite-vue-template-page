<!--
 * @Description: 系统异常页面 403、404 等
 * @Date: 2023-09-06 17:09:25
 * @LastEditTime: 2023-09-06 18:06:36
-->
<script lang="tsx">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useSwitchPage } from '@/hooks'
import { getImageUrl } from '@/utils/util'

export default defineComponent({
  name: 'ErrorPage',
  setup() {
    const prefixCls = ref('error')
    const route = useRoute()
    const isLogout = ref(route.meta.isLogout || true)
    const switchPage = useSwitchPage()

    return {
      prefixCls,
      getImageUrl,
      isLogout,
      toLogin: () => {
        switchPage({ name: 'Login' })
      },
      backHome: () => {
        // switchPage({ name: '' })
      }
    }
  }
})
</script>

<template>
  <section :class="[prefixCls, { logout: isLogout }]">
    <div :class="`${prefixCls}__wrap`">
      <img :src="getImageUrl('404.svg')" alt="error" />
      <div :class="`${prefixCls}__msg global-locale__error__msg`">
        <span>抱歉，您访问的页面不存在！</span>
        <br />
        <span>访问链接可能错误，或者该页面已被删除。</span>
        <a v-if="isLogout" type="link" @click="toLogin">前往登录页</a>
        <a v-else type="link" @click="backHome">前往xx模块</a>
      </div>
    </div>
  </section>
</template>
