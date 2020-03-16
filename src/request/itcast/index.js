import axios from 'axios'
import store from '@/store'
const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/mp/',
  // 设置默认请求地址
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
    // 设置默认请求头
  }
})
instance.interceptors.request.use((config) => {
  // 设置token请求头
  config.headers.Authorization = `Bearer ${store.state.customer.token}`
  // 加loading
  return config
})
instance.interceptors.response.use((res) => {
  // 简化数据
  // 更新token
  return res.data.data
})
export default (url, method, data) => {
  return instance({
    method,
    url,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: data
    // 判断请求方式 来决定是data传参还是params传参
  })
}
