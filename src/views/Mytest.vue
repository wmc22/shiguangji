<template>
    <div class="out">
        <router-view></router-view>
<div class="inner">
    <div class="hostimg">
<van-nav-bar
  title="我的"
  right-text="设置"
  @click-right="onClickRight"
  :fixed="true"
/>
    </div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="mode">
        <div class="kid"></div>
  <van-image 
  round
  width="100px"
  height="100px"
  @click="denglu()"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>  
<van-row>
  <van-col span="8"></van-col>
  <van-col span="8" >{{head}}</van-col>
  <van-col span="8"></van-col>
</van-row>
<div class="collive">
<van-row>
  <van-col span="8"></van-col>
  <van-col span="8" >生活达人</van-col>
  <van-col span="8"></van-col>
</van-row>
</div>
</div>
<div class="kids"></div>
<van-row type="flex"  justify="center" gutter="10">
  <van-col class="rowlife" span="10">
      <P>10</P>
      <span>关注</span>
  </van-col>
  <van-col class="rowlife" span="10">
      <P>99999</P>
      <span>粉丝</span>
  </van-col>
</van-row>
<div class="kids"></div>


<van-row>
  <van-col  class="offsets" offset="1" span="23" >
      <h4 @click="vipvue()" ><van-icon name="circle" size="12"/>&nbsp;会员中心</h4>  
      </van-col>
</van-row>
<van-divider />
<van-row >
  <van-col class="offsets" offset="1" span="23" >
     <p  @click="album()"><van-icon name="circle" size="12"/>&nbsp;制作相册</p> 
      </van-col>
</van-row>
<van-row >
  <van-col class="offsets" offset="1" span="23" >
     <p  @click="collection()"><van-icon name="circle" size="12"/>&nbsp;我的收藏</p> 
      </van-col>
</van-row>
 <van-divider />
<van-row >
  <van-col class="offsets" offset="1" span="23" >
     <p  @click="cart()"><van-icon name="circle" size="12"/>&nbsp;购物车</p> 
      </van-col>
</van-row>
<van-row >
  <van-col class="offsets" offset="1" span="23" >
     <p  @click="myorder()"><van-icon name="circle" size="12"/>&nbsp;我的订单</p> 
      </van-col>
</van-row>
<van-row >
  <van-col class="offsets" offset="1" span="23" >
     <p  @click="coupon()"><van-icon name="circle" size="12"/>&nbsp;优惠卷</p> 
      </van-col>
</van-row>
<van-divider />


<!--  --> 
<!-- <p>我是一只猫c</p>
<span>生活达人</span> -->
</van-pull-refresh>
    </div>
    </div>


</template>
<script>
export default {
    data() {
            return {
                count:0,
                isLoading:false,
                radio:'1',
                title:'首页',
                head: "请登录",
            }
        },
       
    methods: {
      denglu(){
 
      if (localStorage.getItem("token") == null) {
        // this.head = localStorage.getItem("username");
        this.$router.push("/login");
      }else{
var uide = localStorage.getItem("token");
 const uid=uide.split(',')
 console.log(uid)
 this.$router.push("/setting")
      }
      },
        onClickRight(){
          this.$router.push("/setting")
        },
         onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    vipvue(){
        console.log(1)
    this.$router.push("/vipcores")
    },
    album(){
    this.$router.push("/album")
    },
    collection(){
    this.$router.push("/collection")
    },
    cart(){
    this.$router.push("/cart")
    },
    myorder(){
    this.$router.push("/myorder")
    },
    coupon(){
    this.$router.push("/coupon")
    },    
    },
    mounted() {
    var uide = localStorage.getItem("token");
    const uid=uide.split(',')
    if (uid != null) {
      this.head = uid[0];
    } else if(localStorage.getItem("token") == null) {
        // this.head = localStorage.getItem("username");
        //  this.imge=false,
        
       
      }
    },

}
</script>

<style lang="" scoped>
.out{
    width: 100%;
    height: 100%;
    /* margin-top: 46px; */
    margin-bottom: 46px;
    overflow: hidden;
}
.mode {
  width: 100%;
  height: 35%;
  /* position: absolute; */
  /* z-index: 1; */
  background: #dcdcdc;
  border-radius:  0 0 65% 65%;

        display:block;
}
.offsets{
    text-align: center;
    /* background: #dcdcdc; */
    line-height: 12px;
}
.hostimg{
    background: #dcdcdc;
    color: black;
    
}
    .inner { 
  width: 100%;
  height: 100%;
  /* z-index: 9; */
  position: relative;
  /* background: orange; */
}
.kid{
    height: 65px;
}
.kids{
    height: 35px;
}
.collive{
    font-size: 12px;
    color: black;
}
.rowlife{
    background: #dcdcdc;
    height: 100px;
    line-height: 24px;
}

</style>