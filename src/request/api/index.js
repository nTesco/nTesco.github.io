import itcast from '@/request/itcast'
import apiopen from '@/request/apiopen'
export const Login = data => itcast('v1_0/authorizations', 'post', {
  'mobile': '17000009410',
  'code': '246810'
})
export const GetArticles = () => itcast('v1_0/articles', 'get')

export const LoginUser = data => apiopen('loginUser', 'post', data)
export const DeveloperLogin = data => apiopen('developerLogin', 'post', data)
