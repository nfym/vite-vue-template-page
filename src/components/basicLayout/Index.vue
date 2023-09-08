<!--
 * @Description:
 * @Date: 2023-09-08 11:04:03
 * @LastEditTime: 2023-09-08 18:21:37
-->
<template>
  <div :class="prefixCls">
    <header :class="`${prefixCls}__header`">
      <SystemLogo />
      <!-- <HeadMenu />-->
      <UserInfo />
    </header>
    <!-- <comp-scrollbar>
      <CompContent />
    </comp-scrollbar> -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SystemLogo from './header/SystemLogo.vue'
import UserInfo from './header/UserInfo.vue'
// import HeadMenu from 'components/headMenu/Index.vue'
import CompContent from './CompContent.vue'

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
    box-sizing: border-box;
    width: 100vw;
    min-height: 4rem;
    padding: 0 1.5rem 0 1rem;
    overflow: hidden;
    background-color: @gray-1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}
</style>
