<!--
 * @Description: 系统基本布局
 * @Date: 2023-09-08 11:04:03
 * @LastEditTime: 2023-09-11 10:57:52
-->
<template>
  <div :class="prefixCls">
    <header :class="`${prefixCls}__header`">
      <SystemLogo />
      <!-- <HeadMenu />-->
      <UserInfo />
    </header>

    <comp-scrollbar>
      <MainContainer />
    </comp-scrollbar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SystemLogo from './header/SystemLogo.vue'
import UserInfo from './header/UserInfo.vue'
// import HeadMenu from './header/headMenu.vue'
import MainContainer from './body/MainContainer.vue'

const prefixCls = ref('basic-layout')
</script>

<style lang="less" scoped>
@prefix-cls: ~'basic-layout';

.@{prefix-cls} {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background-color: @gray-1;
  background-size: 100%;

  &__header {
    display: flex;
    justify-content: space-between;
    width: 100vw;
    min-height: 4rem;
    padding: 0 1rem;
    overflow: hidden;
    background-color: @gray-1;
  }
}
</style>
