<template>
    <div class="inner">
       <van-nav-bar
  title="我的收藏"
  :fixed="true"
  left-arrow
  @click-left="onClickLeft"
/>
<div class="out">
<van-grid :border="false" :column-num="3">
  <van-grid-item>
    <van-image src="https://imgservice.suning.cn/uimg1/b2c/image/vd9uxalJKtD_Kc1NtitOag.jpg_800w_800h_4e_100Q" />
   <p> 宝宝零食<van-icon name="like-o"/></p>
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://imgservice.suning.cn/uimg1/b2c/image/TcxoSGBXiImU1gKpF2y0mw.jpg_800w_800h_4e_100Q" />
    <p> 最爱坚果<van-icon name="like-o"/></p>
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://imgservice.suning.cn/uimg1/b2c/image/4yeBNn-ys-ofbLtUKOLiGg.jpg_800w_800h_4e_100Q" />
    <p> 零食大礼包<van-icon name="like-o"/></p>
  </van-grid-item>
    <van-grid-item>
    <van-image src="https://imgservice.suning.cn/uimg1/b2c/image/vd9uxalJKtD_Kc1NtitOag.jpg_800w_800h_4e_100Q" />
   <p> 宝宝零食<van-icon name="like-o"/></p>
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://imgservice.suning.cn/uimg1/b2c/image/TcxoSGBXiImU1gKpF2y0mw.jpg_800w_800h_4e_100Q" />
    <p> 最爱坚果<van-icon name="like-o"/></p>
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://imgservice.suning.cn/uimg1/b2c/image/4yeBNn-ys-ofbLtUKOLiGg.jpg_800w_800h_4e_100Q" />
    <p> 零食大礼包<van-icon name="like-o"/></p>
  </van-grid-item>
    <van-grid-item>
    <van-image src="https://imgservice.suning.cn/uimg1/b2c/image/vd9uxalJKtD_Kc1NtitOag.jpg_800w_800h_4e_100Q" />
   <p> 宝宝零食<van-icon name="like-o"/></p>
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://imgservice.suning.cn/uimg1/b2c/image/TcxoSGBXiImU1gKpF2y0mw.jpg_800w_800h_4e_100Q" />
    <p> 最爱坚果<van-icon name="like-o"/></p>
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://imgservice.suning.cn/uimg1/b2c/image/4yeBNn-ys-ofbLtUKOLiGg.jpg_800w_800h_4e_100Q" />
    <p> 零食大礼包<van-icon name="like-o"/></p>
  </van-grid-item>
    <van-grid-item>
    <van-image src="https://imgservice.suning.cn/uimg1/b2c/image/vd9uxalJKtD_Kc1NtitOag.jpg_800w_800h_4e_100Q" />
   <p> 宝宝零食<van-icon name="like-o"/></p>
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://imgservice.suning.cn/uimg1/b2c/image/TcxoSGBXiImU1gKpF2y0mw.jpg_800w_800h_4e_100Q" />
    <p> 最爱坚果<van-icon name="like-o"/></p>
  </van-grid-item>
  <van-grid-item>
    <van-image src="https://imgservice.suning.cn/uimg1/b2c/image/4yeBNn-ys-ofbLtUKOLiGg.jpg_800w_800h_4e_100Q" />
    <p> 零食大礼包<van-icon name="like-o"/></p>
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
    .out{
        margin-top: 45px;
    }
</style>