<template>
  <div class="index">
    <div class="container">

    
<router-view></router-view>


    </div>

    <van-tabbar v-model="active" :fixed='true' class="inner">
      <van-tabbar-item icon="balance-o" to="/silkbag">锦囊</van-tabbar-item>
      <van-tabbar-item icon="smile-o" to="/life">生活</van-tabbar-item>
      <van-tabbar-item icon="home-o" to="/lovetime">时光记</van-tabbar-item>
      <van-tabbar-item icon="more-o" to="/message">消息</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/mytest">我的</van-tabbar-item>
    </van-tabbar>




  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
        active: 2
    }
  },
   methods: {
      
    
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inner{
  z-index: 99;
}
</style>