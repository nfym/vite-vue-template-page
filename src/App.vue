<script setup lang="ts">
import { theme } from 'ant-design-vue'
import { useReload } from '@/hooks'
const { isRouterAlive } = useReload()
console.log('🚀 ~ file: App.vue:5 ~ ant-design-vue theme:', theme)
</script>

<template>
  <router-view v-if="isRouterAlive" />
</template>
