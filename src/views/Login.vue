<template>
  <div class='container'>
    <nut-navbar
        style="background-color:rgba(0,0,0,0.1); color: #000; height:50px; line-height: 50px;"
        :leftShow=false
        :rightShow=false

    >
        <span style="font-size : 18px">用 户 登 录</span>
    </nut-navbar>
    <div class="login">
      <!-- <div>
        <label for="">用户名</label>
        <input type="text" v-model=user.name>
      </div>
      <div>
        <label for="">密码</label>
        <input type="password" v-model=user.passwd>
      </div> -->
      <van-form @submit="login">
        <van-field
          v-model="user.name"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="user.passwd"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin-top: 16px;">
           <nut-button
              style="background-color:rgba(0,0,0,0.1);font-size : 16px"
              block
              color="#000"
              type="light"
            >
            登录
           </nut-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { LoginUser, DeveloperLogin, Login } from '@/request/api'
import qs from 'qs'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      user: {
        name: '17000009410',
        passwd: 'm52322934',
        apikey: ''
      },
      devUser: {
        name: 'lm188712124',
        passwd: 'm52322934'
      }
    }
  },
  methods: {
    async login () {
      const res = await LoginUser(qs.stringify(this.user))
      if (res) {
        this.$toast.success('登录成功')
        const data = await Login()
        this.setUser(data.token)
        setTimeout(() => this.$router.push('Home'), 2000)
      } else {
        this.$toast.fail('请重新输入用户名或密码')
      }
    },
    async developerLogin () {
      const data = await DeveloperLogin(qs.stringify(this.devUser))
      this.user.apikey = data.apikey
    },
    ...mapMutations(['setUser'])
  },
  created () {
    this.developerLogin()
  },
  computed: {
    ...mapState(['customer'])
  }
}
</script>

<style scoped lang='less'>
.login{
  div{
    text-align: center;
    label{
      text-align: right;
      width: 60px;
      display: inline-block;
    }
    input{
      margin-left: 5px;
    }
  }
}
</style>
