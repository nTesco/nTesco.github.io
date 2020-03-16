import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://api.apiopen.top',
  // 设置默认请求地址
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
    // 设置默认请求头
  }
})
instance.interceptors.request.use((req) => {
  // 设置token请求头
  // res.headers.Authorization=
  // 加loading
  return req
})
instance.interceptors.response.use((res) => {
  // 简化数据
  // 更新token
  return res.data.result
})
export default (url, method, data) => {
  return instance({
    method,
    url,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: data
    // 判断请求方式 来决定是data传参还是params传参
  })
}
