<!--
 * @Description: 列表页，模块首页
 * @Date: 2023-09-07 15:34:23
 * @LastEditTime: 2023-09-21 16:02:54
-->
<script setup lang="ts">
import { ref } from 'vue'
import { usePrefix } from '@/hooks'

defineOptions({ name: 'DataManageList' })

const prefixCls = usePrefix('data-manage-list')

// 当前显示的menu
const current = ref(['DashboardIndex2'])
</script>

<template>
  <main :class="prefixCls.b()">
    <a-menu v-model:selectedKeys="current" :class="`${prefixCls.be('menu')}`">
      <a-menu-item
        key="DashboardIndex1"
        :class="`${prefixCls.be('menu-item')}`"
      >
        页面管理
      </a-menu-item>
      <a-menu-item
        key="DashboardIndex2"
        :class="`${prefixCls.be('menu-item')}`"
      >
        {{ $t('personalCenter.basicInfo.title') }}
      </a-menu-item>
      <a-menu-item
        key="DashboardIndex3"
        :class="`${prefixCls.be('menu-item')}`"
      >
        路由管理
      </a-menu-item>
    </a-menu>
  </main>
</template>

<style scoped lang="less">
@prefix-cls: ~'data-manage-list';

.@{prefix-cls} {
  display: flex;
  width: 100%;
  height: 100%;

  &__menu {
    width: 10rem;
    height: 100%;
    margin-right: @padding-lg;
    padding: @padding-md;
    padding-top: 2rem;
    background: @gray-2;
    border-radius: @padding-lg;
  }

  // 修改ant menu 组件样式
  :deep(.ant-menu-vertical) {
    border-right: none;
  }

  :deep(.ant-menu-item.ant-menu-item-only-child) {
    margin-top: 1rem;
    border-right: none;
    border-radius: @padding-lg;

    span {
      display: inline-block;
      width: 100%;
      text-align: center;
    }

    &.ant-menu-item-selected,
    &.ant-menu-item-active {
      background-color: @gray-4;
    }
  }
}
</style>
