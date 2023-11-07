import request from '@/utils/request'

// 默认搜索关键词
export function getSearchDefault() {
  return request({
    url: '/search/default',
    method: 'get',
  })
}

// 获取banner
export function getBanner(params: any) {
  return request({
    url: '/banner',
    method: 'get',
    params,
  })
}

// 获取推荐歌单
export function getPersonalized() {
  return request({
    url: '/personalized',
    method: 'get',
  })
}

// 获取精品歌单
export function getPlaylistHighquality(params: any) {
  return request({
    url: '/top/playlist/highquality',
    method: 'get',
    params,
  })
}

// 获取热门电台
export function djHot() {
  return request({
    url: '/dj/hot',
    method: 'get',
  })
}

// 获取推荐新音乐
export function personalizedNewsong() {
  return request({
    url: '/personalized/newsong',
    method: 'get',
  })
}

// 获取所有榜单
export function toplist() {
  return request({
    url: '/toplist',
    method: 'get',
  })
}

// 获取歌单详情
export function playlistDetail(params: any) {
  return request({
    url: '/playlist/detail',
    method: 'get',
    params,
  })
}
