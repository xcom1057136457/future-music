<!-- 由 Dioa 创建于 2023-11-06 Monday -->
<script lang='ts' setup>
import AppMain from './components/appMain/index.vue'
import AppFoot from './components/appFoot/index.vue'

defineOptions({
  name: 'DefaultLayout',
})
</script>

<template>
  <div min-h-full overflow-auto>
    <AppMain />
    <AppFoot />
  </div>
  <van-back-top right="9vw" bottom="18vw" class="!bg-black/80">
    <div h-40px w-40px flex items-center justify-center rounded-full>
      <div i-material-symbols-keyboard-capslock text-30px />
    </div>
  </van-back-top>
</template>

<style lang="scss" scoped></style>
