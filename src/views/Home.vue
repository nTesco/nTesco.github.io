<template>
  <div class='container'>
    <div>
      <h1 class="title">移动端个人页面</h1>
    </div>
    <div class="content" v-for="(item,index) in options" :key="index">
      <div class="item" @click=$router.push(item.name) >
        <van-image
          width="60px"
          height="60px"
          :src='item.src'
        />
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        { name: 'List', title: '我的收藏', src: 'https://www.easyicon.net/api/resizeApi.php?id=1062501&size=128' }, { name: 'Img', title: '我的图片', src: 'https://www.easyicon.net/api/resizeApi.php?id=1062508&size=128' }, { title: '我的日记', src: 'https://www.easyicon.net/api/resizeApi.php?id=1062498&size=128' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped lang='less'>
  .title{
    text-align: center;
    color: #fff;
  }
  .content{
    .item{
      float: left;
      width: 25%;
      text-align: center;
      p{
        margin: 0;
        margin-bottom: 5px
      }
    }
  }
</style>
