<!-- 由 Dioa 创建于 2023-11-06 Monday -->
<script lang='ts' setup>
import { storeToRefs } from 'pinia'

defineOptions({
  name: 'AppMain',
})

const { cacheViews } = storeToRefs(useCacheViewsStore())
</script>

<template>
  <div>
    <router-view v-slot="{ Component, route }">
      <keep-alive :include="cacheViews">
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style lang="scss" scoped></style>
