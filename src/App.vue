<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/logo.svg" class="logo" alt="Vite logo" />
    </a>
  </div>
  <HelloWorld msg="base 设置 ./ 相对路径测试" />

  <div>测试更新通知插件</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #78b4fe);
}
</style>
