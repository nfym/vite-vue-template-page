<script lang="ts" setup>
import { ref } from 'vue'
import { useSwitchPage } from '@/hooks'

const prefixCls = ref('app-logo')
const switchPage = useSwitchPage()

function goHome(): void {
  switchPage({ name: 'Dashboard' })
}
</script>

<template>
  <section :class="prefixCls">
    <div :class="`${prefixCls}__click-area`" @click="goHome">
      <img
        :class="`${prefixCls}__logo`"
        src="/public/logo.svg"
        alt="system_logo"
      />
      <div :class="`${prefixCls}__title`">
        <span>Vite Template</span>
      </div>
    </div>
  </section>
</template>

<style lang="less" scoped>
@prefix-cls: ~'app-logo';

.@{prefix-cls} {
  min-width: 16rem;

  &__click-area {
    display: inline-flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
  }

  &__logo {
    width: 2rem;
    height: 2rem;
  }

  &__title {
    margin-left: 0.5rem;
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.5rem;
  }
}
</style>
