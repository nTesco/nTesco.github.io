<template>
  <div class='container'>
    <nut-navbar
      style="background-color:rgba(0,0,0,0.2); color: #fff; height:55px; line-height: 55px;"
        @on-click-back="NavBarLeft"
        @on-click-more="NavBarRight"
        :leftShow="true"
        :rightShow="true"
    >{{title}}</nut-navbar>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item.length">
        <div class="cell">
          <div v-if="!item.src" class="noImg">{{item.text}}</div>
          <van-image
          v-else
          width="60px"
          height="60px"
          :src='item.src'
          />
          <div class="cell_right">
            <div class="cell_text">{{item.text}}</div>
            <div class="cell_url">http://</div>
          </div>
        </div>
      </van-cell>
    </van-list>
    <nut-popup :style="{ padding: '30px 50px' }" v-model="show">正文</nut-popup>
  </div>
</template>

<script>
import { GetArticles } from '@/request/api'
export default {
  data () {
    return {
      show: false,
      list: [{ text: '百度一下，你就知道' }, { text: '今日降温，小心感冒', src: '111' }],
      title: '标题',
      loading: false,
      finished: false
    }
  },
  methods: {
    showPopup () {
      this.show = true
    },
    NavBarLeft () {
      this.$router.push('Home')
    },
    NavBarRight () {
      this.showPopup()
    },
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 10) {
          this.finished = true
        }
      }, 1000)
    },
    async getArticles () {
      const data = await GetArticles()
      console.log(data)
    }
  },
  created () {
    this.getArticles()
  }
}
</script>

<style scoped lang='less'>
.cell{
  display: flex;
  height: 70px;
  padding: 5px;
  box-sizing: border-box;
  .noImg{
    overflow: hidden;
    padding: 5px;
    box-sizing: border-box;
    width: 60px;
    height: 60px;
    line-height: 48px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 18px;
  }
  .cell_right{
    padding: 5px;
    padding-left: 30px;
    box-sizing: border-box;
    .cell_text{
      height: 32px;
      box-sizing: border-box;
      padding-bottom: 5px;
    }
    .cell_url{
      font-size: 12px;
    }
  }
}
</style>
