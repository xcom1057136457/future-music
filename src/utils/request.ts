import axios, { type AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { showFailToast } from 'vant'
import * as errorCode from './errorCode'
import { tansParams } from '@/utils/utils'
import cache from '@/plugins/cache'

const service = axios.create({
  baseURL: import.meta.env.VITE_WEB_URL,
  timeout: 5000,
  withCredentials: true,
})

service.interceptors.request.use((config: AxiosRequestConfig): any => {
  // 是否需要防止数据重复提交
  const isRepeatSubmit: boolean
  = (config.headers || {})?.isRepeatSubmit === false

  // get请求映射params参数
  if (config.method === 'get' && config.params) {
    let url = `${config.url}?${tansParams(config.params)}`
    url = url.slice(0, -1)
    config.params = {}
    config.url = url
  }

  if (
    !isRepeatSubmit
    && (config.method === 'post' || config.method === 'put')
  ) {
    const requestObj = {
      url: config.url,
      data:
        typeof config.data === 'object'
          ? JSON.stringify(config.data)
          : config.data,
      time: new Date().getTime(),
    }
    const sessionObj = cache.session.getJSON('sessionObj')
    if (
      sessionObj === undefined
      || sessionObj === null
      || sessionObj === ''
    ) {
      cache.session.setJSON('sessionObj', requestObj)
    }
    else {
      const sUrl = sessionObj.url // 请求地址
      const sData = sessionObj.data // 请求数据
      const sTime = sessionObj.time // 请求时间
      const interval = 1000 // 间隔时间(ms)，小于此时间视为重复提交
      if (
        sData === requestObj.data
        && requestObj.time - sTime < interval
        && sUrl === requestObj.url
      ) {
        const message = '数据正在处理，请勿重复提交'
        return Promise.reject(new Error(message))
      }
      cache.session.setJSON('sessionObj', requestObj)
    }
  }

  return config
}, (error: AxiosError) => {
  return Promise.reject(error)
})

service.interceptors.response.use((response: AxiosResponse) => {
  // 未设置状态码则默认成功状态
  const code: any = response.data.code || 200

  // 获取错误信息
  const msg
    = errorCode.default[code as keyof typeof errorCode]
    || response.data.msg
    || errorCode.default.default

  if (code === 601 || code === 500) {
    showFailToast(msg)
    return Promise.reject(new Error(msg))
  }
  else if (code !== 200) {
    showFailToast(msg)
    return Promise.reject(new Error(msg))
  }
  return Promise.resolve(response.data)
}, (error: AxiosError) => {
  let { message } = error
  if (message === 'Network Error')
    message = '后端接口连接异常'
  else if (message.includes('timeout'))
    message = '系统接口请求超时'
  else if (message.includes('Request failed with status code'))
    message = `系统接口${message.substr(message.length - 3)}异常`
  showFailToast(message)
  return Promise.reject(error)
})

export default service
