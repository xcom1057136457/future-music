import { defineStore } from 'pinia'

interface IState {
  cacheViews: string[]
}

export const useCacheViewsStore = defineStore('cacheViews', {
  state: (): IState => {
    return {
      cacheViews: [],
    }
  },
  actions: {
    useAddCacheViews(view: any) {
      if (view.meta?.noCache)
        return

      if (!this.cacheViews.includes(view.name))
        this.cacheViews.push(view.name)
    },
  },
})
