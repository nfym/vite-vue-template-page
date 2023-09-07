<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h2>{{ msg }}</h2>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>
