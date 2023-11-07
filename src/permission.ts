import router from '@/router'

router.beforeEach((to, from, next) => {
  useHead({
    title: to.meta?.title ? `Future Music - ${to.meta?.title}` : `Future Music`,
    link: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: () => '/favicon.svg',
      },
    ],
  })
  const { useAddCacheViews } = useCacheViewsStore()
  useAddCacheViews(to)
  next()
})
