<!--
 * @Description: 列表页，模块首页
 * @Date: 2023-09-07 15:34:23
 * @LastEditTime: 2023-09-18 18:06:09
-->
<script setup lang="ts">
import { ref } from 'vue'

defineOptions({
  name: 'TaskManage'
})

const prefixCls = ref('task-manage-list')

const tabsVerticalInnerRef = ref()
const activeIndex = ref(0)
const selectorActiveTop = ref('0px')

function handleClickNavItem(index: number) {
  activeIndex.value = index
  selectorActiveTop.value = index * 45 + 'px'
  console.log(
    '🚀 ~ file: Index.vue ~ line 56 ~ handleClickNavItem ~ selectorActiveTop.value',
    selectorActiveTop.value
  )
  console.log(
    '🚀 ~ file: Index.vue ~ line 61 ~ handleClickNavItem ~ tabsVerticalInnerRef.value',
    tabsVerticalInnerRef.value.scrollHeight
  )
}
</script>

<template>
  <div :class="prefixCls">
    <aside id="accordian" ref="tabsVerticalInnerRef">
      <comp-scrollbar>
        <ul class="main-navbar">
          <div class="selector-active">
            <div class="top"></div>
            <div class="bottom"></div>
          </div>

          <li
            v-for="(item, index) in 20"
            :key="item"
            :class="{ active: activeIndex === index }"
            @click="handleClickNavItem(index)"
          >
            <em class="ri-sun-line"></em>
            {{ item }}
          </li>
        </ul>
      </comp-scrollbar>
    </aside>

    <main><router-view></router-view></main>
  </div>
</template>

<style scoped lang="less">
@prefix-cls: ~'task-manage-list';

.@{prefix-cls} {
  display: flex;
  width: 100%;
  height: 100%;

  i,
  em {
    margin-right: 10px;
  }

  #accordian {
    position: relative;
    float: left;
    width: 250px;
    height: 110%;
    max-height: 100%;
    padding: 20px 10px;
    padding-right: 0;
    overflow-x: hidden;
    background: @primary-color;
  }

  .main-navbar {
    position: relative;
  }

  #accordian ul li {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 20px;
    color: @gray-4;
    font-size: 16px;
    line-height: 45px;
    text-decoration: none;
    list-style-type: none;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition-duration: 0.6s;
  }

  #accordian ul li.active {
    color: @primary-color;
    background-color: transparent;
    transition: all 0.7s;
  }

  .selector-active {
    position: absolute;
    top: v-bind(selectorActiveTop);
    left: 0;
    display: inline-block;
    width: 100%;
    height: 45px;
    background-color: #fff;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition-duration: 0.6s;
  }

  .selector-active .top,
  .selector-active .bottom {
    position: absolute;
    right: 0;
    width: 25px;
    height: 25px;
    background-color: #fff;
  }

  .selector-active .top {
    top: -25px;
  }

  .selector-active .bottom {
    bottom: -25px;
  }

  .selector-active .top::before,
  .selector-active .bottom::before {
    position: absolute;
    left: -25px;
    width: 50px;
    height: 50px;
    background-color: @primary-color;
    border-radius: 50%;
    content: '';
  }

  .selector-active .top::before {
    top: -25px;
  }

  .selector-active .bottom::before {
    bottom: -25px;
  }

  main {
    width: 100%;
    padding: 5rem;
  }
}
</style>
