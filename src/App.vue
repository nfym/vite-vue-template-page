<script setup lang="ts">
defineOptions({ name: 'App' })
import { useReload } from '@/hooks'
const { isRouterAlive } = useReload()
</script>

<template>
  <router-view v-if="isRouterAlive" />
</template>
