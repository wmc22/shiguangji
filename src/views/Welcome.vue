<template>
<div>
<div class="mode"></div>
<div id="inner">
<div class="kid"></div>
<van-icon name="contact" info size="100"  color="azure"/>
          <!-- <van-row gutter="20">
  <van-col span="8"></van-col>
  <van-col span="8">Welcome</van-col>
  <van-col span="8"></van-col>
</van-row> -->
<p>Welcome</p>
<p>哈喽，欢迎来到宝宝的世界</p>
<div class="kid">
</div>
<span>
<van-button round type="primary" size="large" color="#fff" @click="tap()">注册</van-button>
</span>
<div class="kid">
</div>
<span>
<van-button round type="primary" size="large" color="#fff" @click="top()">登录</van-button>
</span>
<van-divider />
<div class="iner">
<h2 @click="cop()">先去逛逛>>></h2>
</div>

    </div>
  
  </div>
</template>
<script>
export default {
    methods: {
        tap(){
    this.$router.push("/register")
    },
    top(){
        this.$router.push("/login")
    },
    cop(){
      this.$router.push("/home")
    }

    },
};
</script>
<style lang="" scoped>
.mode {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background: DarkOrange;
}
#inner {
  width: 100%;
  height: 100%;
  z-index: 2;
  position: relative;
  background: DarkOrange;
}
.kid{
    height: 50px;
}
p{
    font-size: 24px;
    color: azure;
}
span{
    color: black;
    text-align: center;
}
</style>