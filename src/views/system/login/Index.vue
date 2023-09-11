<!--
 * @Description: 登录页
 * @Date: 2023-09-06 18:11:26
 * @LastEditTime: 2023-09-11 11:34:43
-->
<script setup lang="ts">
import { ref } from 'vue'
import { useSwitchPage } from '@/hooks'
const prefixCls = ref('login')
const switchPage = useSwitchPage()

function handleCLickLogin() {
  switchPage({ name: 'DataManage' })
}
</script>

<template>
  <div :class="prefixCls">
    <section>
      <img src="/logo.svg" :class="`${prefixCls}__logo`" alt="system logo" />
      <br />
      <a-button @click="handleCLickLogin">假装登录</a-button>
    </section>
  </div>
</template>

<style lang="less" scoped>
@prefix-cls: ~'login';

.@{prefix-cls} {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  &__logo {
    height: 6rem;
    padding: 1.5rem;
    will-change: filter;
  }

  &__logo:hover {
    filter: drop-shadow(0 0 2rem #78b4fe);
  }
}
</style>
