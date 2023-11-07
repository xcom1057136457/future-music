<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <van-config-provider
    :theme-vars="{ primaryColor: '#0052d9' }"
    theme-vars-scope="global"
  >
    <RouterView />
  </van-config-provider>
</template>
