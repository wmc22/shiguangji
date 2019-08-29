


<template>
  <div>
    <van-nav-bar
  title="个人资料"
  left-text="返回"
  :fixed="true"
  left-arrow
  @click-left="onClickLeft"
/>
<div class="out">
 <!-- 头像 -->
    <van-cell-group class="my-container">
      <van-cell title="头像" value="" type="primary" @click="showPopup" />
    </van-cell-group>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '25%' }"
    >
      <div>
        <van-cell class="paizhao" title="拍照"   @click="top()"/>
        <!-- <van-cell class="paizhao" title="从手机相册选择"  @click="top()"/> -->
<van-uploader>
  <van-button type="primary">上传图片</van-button>
</van-uploader>
        <van-cell class="paizhao" title="取消"  />
      </div>
    </van-popup>
    <!-- 页面跳转 -->
    <van-cell title="用户名" is-link value="" />
    <!-- 性别 -->
    <van-cell-group >
      <van-cell title="性别" value="男" type="primary" @click="container()" />
    </van-cell-group>
    <van-popup
      v-model="shows"
      position="bottom"
      :style="{ height: '25%' }"
    >
      <div>
        <van-cell class="paizhao" title="男"  />
        <van-cell class="paizhao" title="女" />
        <van-cell class="paizhao" title="取消"  @click="Dialog()" />
      </div>
    </van-popup>
    <!-- 绑定手机 -->
    <van-cell title="绑定手机" value="+86188-93666323" size="large" />
    <!-- 绑定微信 -->
    <van-cell title="绑定微信" value="已绑定" size="large" />
    <!-- 收货地址 -->
    <van-cell title="收货地址" is-link value="未绑定" @click="Shippingaddress()" />
   
    <!-- 退出登录 -->
    <van-button type="primary" class="tuichu" @click="tuichu()">退出登录</van-button>
</div>
   
  </div>
</template>


<script>
export default {
  data() {
    return {
     
      shows:false,
      show: false,
      center:false,
      fileList:[],
      head:""
    };
  },

  methods: {
    // 返回一个特定的 DOM 节点，作为挂载的父节点
    onClickLeft(){
      this.$router.go(-1)
    },
   Dialog(){
     this.$router.go(0)
   },
   top(){

   },
    showPopup() {
      this.show = true;
    },
    container() {
      this.shows = true;
    },
    
    Shippingaddress() {
      this.$router.push("/address");
    },
  
    tuichu() {
      this.$router.push("/welcome");
     localStorage.clear();
    }
  }
};
</script>

<style secoped >
.tuichu {
  width: 9.25rem;
  height: 50px;
  margin-top: 10px;
  margin-left: 5px;
}
.paizhao {
  text-align: center;
}
.out{
  margin-top:46px; 
}
</style>
