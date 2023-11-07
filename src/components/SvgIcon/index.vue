<!-- 由 Dioa 创建于 2023-11-06 Monday -->
<script lang="ts" setup>
defineOptions({
  name: 'SvgIcon',
})

const props = withDefaults(defineProps<IProps>(), {
  className: '',
  color: '',
})

interface IProps {
  iconClass: any
  className?: any
  color?: string
}

const iconName = computed(() => {
  return `#icon-${props.iconClass}`
})

const svgClass = computed(() => {
  if (props.className)
    return `svg-icon ${props.className}`

  return 'svg-icon'
})
</script>

<template>
  <svg
    :class="svgClass"
    relative
    h-1em
    w-1em
    fill-current
    class="-align-2px"
    aria-hidden="true"
  >
    <use :xlink:href="iconName" :fill="color" />
  </svg>
</template>

<style lang="scss" scoped></style>
