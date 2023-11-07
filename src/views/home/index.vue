<!-- 由 Dioa 创建于 2023-11-06 Monday -->
<script lang="ts" setup>
import { chunk } from 'lodash-es'
import {
  djHot,
  getBanner,
  getPersonalized,
  getPlaylistHighquality,
  getSearchDefault,
  personalizedNewsong,
  playlistDetail,
  toplist,
} from '@/api/home'

defineOptions({
  name: 'Home',
})

// 获取默认搜索关键词
const defaultPlaceholder = ref<string>('')

async function getSearchPlaceholder() {
  const { code, data }: any = await getSearchDefault()
  if (code === 200)
    defaultPlaceholder.value = data.showKeyword
}

getSearchPlaceholder()

// 获取banner
const bannerList = ref<any>([])

async function handleGetBanner() {
  const { code, banners }: any = await getBanner({ type: 2 })
  if (code === 200)
    bannerList.value = banners
}

handleGetBanner()

const gridList = ref([
  {
    label: '每日推荐',
    name: 'recommended',
    icon: 'i-material-symbols-crossword',
  },
  {
    label: '歌单',
    name: 'songSheet',
    icon: 'i-material-symbols-text-snippet',
  },
  {
    label: '排行榜',
    name: 'rankings',
    icon: 'i-material-symbols-trophy',
  },
  {
    label: '数字专辑',
    name: 'digitalAlbum',
    icon: 'i-material-symbols-movie-filter-sharp',
  },
])

// 获取推荐歌单
const songList = ref<any>([])

async function handleGetPersonalized() {
  const { code, result }: any = await getPersonalized()
  if (code === 200)
    songList.value = result
}

handleGetPersonalized()

// 获取欧美金曲歌单
const highqualityPlayList = ref<any>([])

async function handleGetPlaylistHighquality() {
  const { code, playlists }: any = await getPlaylistHighquality({ type: 1 })
  if (code === 200)
    highqualityPlayList.value = chunk(playlists, 3)
}

handleGetPlaylistHighquality()

// 获取热门电台
const djHotList = ref<any>([])

async function getDjHot() {
  const { code, djRadios }: any = await djHot()
  if (code === 200)
    djHotList.value = chunk(djRadios, 3)
}

getDjHot()

// 获取推荐新音乐
const newsongList = ref<any>([])

async function getPersonalizedNewsong() {
  const { code, result }: any = await personalizedNewsong()
  if (code === 200)
    newsongList.value = chunk(result, 3)
}

getPersonalizedNewsong()

// 获取所有榜单
const rankList = ref<any>([])

async function getToplist() {
  const { code, list }: any = await toplist()
  if (code === 200) {
    for (let i = 0; i <= 2; i++) {
      rankList.value.push({
        ...list[i],
        songList: await getSongListById(list[i].id),
      })
    }
  }
}

function getSongListById(id: any) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    const { code, playlist }: any = await playlistDetail({ id })
    if (code === 200)
      resolve(playlist)
  })
}

getToplist()
</script>

<template>
  <van-search disabled :placeholder="defaultPlaceholder" shape="round">
    <template #left>
      <div i-carbon-menu mr-3 text-xl />
    </template>
  </van-search>

  <div p-2>
    <div mb-2 overflow-hidden rounded-2>
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
        :show-indicators="false"
      >
        <van-swipe-item v-for="item in bannerList" :key="item.pic">
          <van-image
            fit="cover"
            :height="137"
            :src="item.pic"
            lazy-load
            w-full
            overflow-hidden
            rounded-2
          />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div mb-2 flex rounded bg-white py-2>
      <div
        v-for="item in gridList"
        :key="item.name"
        flex
        flex-1
        flex-col
        items-center
        justify-center
      >
        <div mb-2 text-25px class="text-black/80" :class="item.icon" />
        <div text-xs class="text-black/80">
          {{ item.label }}
        </div>
      </div>
    </div>

    <div mb-2 overflow-hidden rounded bg-white p-2>
      <div mb-2 flex items-center>
        <div text-15px>
          推荐歌单
        </div>
        <div i-material-symbols-chevron-right-rounded text-xl />
      </div>

      <div w-full inline-flex gap-2 overflow-x-auto>
        <template v-if="songList && songList.length">
          <div v-for="item in songList" :key="item.id">
            <van-image
              class="rounded"
              lazy-load
              h-90px
              w-90px
              overflow-hidden
              object-cover
              :src="item.picUrl"
            />
            <div w-90px text-12px class="text-black/80">
              <van-text-ellipsis rows="2" :content="item.name" />
            </div>
          </div>
        </template>

        <template v-else>
          <div flex flex-1 justify-center>
            <van-empty image="search" description="暂无数据" image-size="80" />
          </div>
        </template>
      </div>
    </div>

    <div mb-2 overflow-hidden rounded bg-white p-2>
      <div mb-2 flex items-center>
        <div mr-2 text-15px>
          不可错过的欧美歌单
        </div>
        <div flex items-center rounded-3 bg-gray-200 px-7px py-2px>
          <div i-material-symbols-play-arrow-rounded mr-2px text-13px />
          <div text-xs>
            播放
          </div>
        </div>
      </div>

      <div w-full inline-flex gap-2 overflow-x-auto>
        <van-swipe
          class="my-swipe"
          :autoplay="0"
          indicator-color="white"
          :show-indicators="false"
        >
          <van-swipe-item
            v-for="(item, index) in highqualityPlayList"
            :key="index"
          >
            <div
              v-for="(actItem, actIndex) in item"
              :key="actItem.id"
              :class="{ 'mb-3': actIndex !== 2 }"
              w-full
              flex
            >
              <van-image
                lazy-load
                mr-2
                h-50px
                w-50px
                overflow-hidden
                rounded-2
                fit="cover"
                :src="actItem.coverImgUrl"
              />
              <div flex flex-1 flex-col justify-center>
                <div mb-1 text-sm>
                  <van-text-ellipsis :content="actItem.name" />
                </div>
                <div text-xs text-gray-700>
                  {{ actItem.creator.nickname }}
                </div>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <div mb-2 overflow-hidden rounded bg-white p-2>
      <div mb-2 flex items-center>
        <div mr-2 text-15px>
          热门电台
        </div>
        <div flex items-center rounded-3 bg-gray-200 px-7px py-2px>
          <div i-material-symbols-play-arrow-rounded mr-2px text-13px />
          <div text-xs>
            播放
          </div>
        </div>
      </div>

      <div w-full inline-flex gap-2 overflow-x-auto>
        <van-swipe
          class="my-swipe"
          :autoplay="0"
          indicator-color="white"
          :show-indicators="false"
        >
          <van-swipe-item v-for="(item, index) in djHotList" :key="index">
            <div
              v-for="(actItem, actIndex) in item"
              :key="actItem.id"
              :class="{ 'mb-3': actIndex !== 2 }"
              w-full
              flex
            >
              <van-image
                lazy-load
                mr-2
                h-50px
                w-50px
                overflow-hidden
                rounded-2
                fit="cover"
                :src="actItem.picUrl"
              />
              <div flex flex-1 flex-col justify-center>
                <div mb-1 text-sm>
                  <van-text-ellipsis :content="actItem.copywriter" />
                </div>
                <div text-xs text-gray-700>
                  {{ actItem.name }}
                </div>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <div mb-2 overflow-hidden rounded bg-white p-2>
      <div mb-2 flex items-center>
        <div mr-2 text-15px>
          推荐新音乐
        </div>
        <div flex items-center rounded-3 bg-gray-200 px-7px py-2px>
          <div i-material-symbols-play-arrow-rounded mr-2px text-13px />
          <div text-xs>
            播放
          </div>
        </div>
      </div>

      <div w-full inline-flex gap-2 overflow-x-auto>
        <van-swipe
          class="my-swipe"
          :autoplay="0"
          indicator-color="white"
          :show-indicators="false"
        >
          <van-swipe-item v-for="(item, index) in newsongList" :key="index">
            <div
              v-for="(actItem, actIndex) in item"
              :key="actItem.id"
              :class="{ 'mb-3': actIndex !== 2 }"
              w-full
              flex
            >
              <van-image
                lazy-load
                mr-2
                h-50px
                w-50px
                overflow-hidden
                rounded-2
                fit="cover"
                :src="actItem.picUrl"
              />
              <div flex flex-1 flex-col justify-center>
                <div mb-1 text-sm>
                  <van-text-ellipsis :content="actItem.name" />
                </div>
                <div text-xs text-gray-700>
                  {{
                    actItem.song.artists.map((item: any) => item.name).join(',')
                  }}
                </div>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <div rounded bg-white p-2>
      <van-swipe
        class="my-swipe"
        :autoplay="0"
        indicator-color="white"
        :show-indicators="false"
      >
        <van-swipe-item v-for="item in rankList" :key="item.id">
          <div mb-2 flex items-center>
            <div text-15px>
              {{ item.name }}
            </div>
            <div i-material-symbols-chevron-right-rounded text-xl />
          </div>

          <div
            v-for="(actItem, actIndex) in item.songList.tracks.slice(0, 3)"
            :key="actItem.id"
            :class="{ 'mb-2': actIndex !== 2 }"
            flex
          >
            <van-image
              lazy-load
              fit="cover"
              mr-2
              h-60px
              w-60px
              overflow-hidden
              rounded-2
              :src="actItem.al.picUrl"
            />
            <div flex flex-1 flex-col justify-center>
              <div mb-1 text-sm>
                <van-text-ellipsis :content="actItem.name" />
              </div>
              <div text-xs text-gray-700>
                {{ actItem.al.name }}
              </div>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
