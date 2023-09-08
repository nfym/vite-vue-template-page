<template>
  <section
    :class="[
      `${prefixCls}__container`,
      isFullContainer && `${prefixCls}__container-full`
    ]"
  >
    <section
      :class="[
        `${prefixCls}__content`,
        isFullContent && `${prefixCls}__content-full`
      ]"
    >
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </section>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'CompContent',
  setup() {
    const prefixCls = ref('basic-layout')
    const route = useRoute()

    // full 内容，无padding
    const isFullContainer = computed(() => route.meta?.isFullContainer)
    const isFullContent = computed(() => route.meta?.isFullContent)

    return { prefixCls, isFullContainer, isFullContent }
  }
})
</script>
<style scoped lang="less">
@prefix-cls: ~'basic-layout';
@containerPadding: 2rem;
@contentPadding: 1.5rem;

.@{prefix-cls}__container {
  display: flex;
  flex: 1;
  min-width: 80rem;
  height: calc(100vh - 4rem);
  min-height: 37.5rem;
  padding: @containerPadding;
}

.@{prefix-cls}__container-full {
  padding: 0;
}

.@{prefix-cls}__content {
  position: relative;
  width: 100%;
  min-width: 77rem;
  padding: @contentPadding;
  overflow: hidden;
  background-color: @gray-1;
  border-radius: @containerPadding;
}

.@{prefix-cls}__content-full {
  padding: 0;
  // border-radius: 0;
}
</style>
