<!-- 由 Dioa 创建于 2023-11-06 Monday -->
<script lang="ts" setup>
defineOptions({
  name: 'AppFoot',
})

const route = useRoute()

const activeMenu = ref<any>('')

watch(
  () => route.path,
  () => {
    if (route.meta?.activeMenu) {
      activeMenu.value = route.meta?.activeMenu
      return
    }
    activeMenu.value = route.path
  },
  { deep: true, immediate: true },
)

interface IMenuList {
  name: string
  icon: string
  path: string
}

const menuList = ref<IMenuList[]>([
  {
    name: '主页',
    icon: 'home',
    path: '/home',
  },
  {
    name: 'MV',
    icon: 'movie',
    path: '/movie',
  },
  {
    name: '消息',
    icon: 'message',
    path: '/message',
  },
  {
    name: '我的',
    icon: 'user',
    path: '/my',
  },
])
</script>

<template>
  <van-tabbar
    v-model="activeMenu"
    placeholder
    safe-area-inset-bottom
    fixed
    border
  >
    <van-tabbar-item
      v-for="item in menuList"
      :key="item.path"
      :name="item.path"
      :to="item.path"
      replace
    >
      <template #icon>
        <svg-icon :icon-class="item.icon" />
      </template>
      {{ item.name }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<style lang="scss" scoped></style>
