<template>
    <div class="inner">
       <van-nav-bar
  title="制作相册"
  :fixed="true"
  left-arrow
  @click-left="onClickLeft"
/>
<div class="out">
<van-grid :border="false" :column-num="3">
  <van-grid-item>
    <van-image src="http://image.cnpp.cn/upload/images/20171030/10585727715_840x559.jpg" />
   <p> 宝宝相册<van-icon name="like-o"/></p>
  </van-grid-item>
  <van-grid-item>
    <van-image src="http://pic.qqtn.com/up/2019-1/15476181228390059.jpg" />
    <p> 宝宝相册<van-icon name="like-o"/></p>
  </van-grid-item>
  <van-grid-item>
    <van-image src="http://www.agri35.com/UploadFiles/img_0_1944618755_1908605795_26.jpg" />
    <p> 照片冲印<van-icon name="like-o"/></p>
  </van-grid-item>
  <van-grid-item>
    <van-image src="http://img11.360buyimg.com/n1/jfs/t18244/277/1517931637/133453/34d8be21/5accaa2cN23a7e6f4.jpg" />
    <p> 宝宝生活照<van-icon name="like-o"/></p>
  </van-grid-item>
  <van-grid-item>
    <van-image src="http://hbimg.b0.upaiyun.com/74a82948faa805145ee3a3841e515d8048a896a723d69-j68ndj_fw658" />
    <p> 相册<van-icon name="like-o"/></p>
  </van-grid-item>
  </van-grid>
</div>

    </div>
</template>
<script>
export default {
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        }
    },
}
</script>
<style lang="" scoped>
    
</style>