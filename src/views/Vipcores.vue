<template>
    <div class="inner">
       <van-nav-bar
  title="会员中心"
  :fixed="true"
  left-arrow
  @click-left="onClickLeft"
/>
 <div class="swiper">
      <van-swipe :autoplay="5000" :loop="true" indicator-color="#fff">
        <van-swipe-item v-for="(image, index) in SwiperImg" :key="index">
          <img :src="image">
        </van-swipe-item>
      </van-swipe>
    </div>
<div class="out">
<van-grid :border="false" :column-num="3">
  <van-grid-item>
    <van-image style="width:60px; height:60px;" src="http://img5.imgtn.bdimg.com/it/u=3551249464,3333313673&fm=26&gp=0.jpg" />
    <p>我的积分</p>
  </van-grid-item>
  <van-grid-item>
    <van-image style="width:60px; height:60px;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566539531559&di=a6ae4c84497ddb9c180ffa2e0e642e23&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F34%2F64%2F28573bba7f635ea.jpg" />
     <p>每日签到</p>
  </van-grid-item>
  <van-grid-item>
    <van-image style="width:60px; height:60px;" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566539581040&di=8dfc3d8673ee5de781760544aedb705c&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F93%2F46%2F3056f29ec1cf692.jpg" />
     <p>我的奖品</p>
  </van-grid-item>
</van-grid>
</div>
<van-row type="flex" justify="center">
  <van-col span="3"></van-col>
  <van-col span="12">时光会员，专享好货</van-col>
  <van-col span="3"></van-col>
</van-row>
<van-grid :border="false" :column-num="2">
  <van-grid-item>
    <van-image style="width:80px; height:80px;" src="https://img30.360buyimg.com/popWaterMark/jfs/t6223/326/523728742/295845/625ab4ab/5940fdffN91f860e1.jpg" />
    <p>益智不倒翁玩具</p>
    <span>锻炼小手灵活度</span>
    <pre>￥168</pre>
  </van-grid-item>
  <van-grid-item>
    <van-image style="width:80px; height:80px;" src="https://img30.360buyimg.com/popWaterMark/jfs/t1/37132/24/2276/198469/5cb9af7eEeb6d5b11/65ed563e090dff6e.jpg" />
    <p>宝宝爬行折叠垫</p>
    <span>宝宝摔倒不疼，妈妈放心</span>
    <pre>￥298</pre>
  </van-grid-item>
  <van-grid-item>
    <van-image style="width:80px; height:80px;" src="https://img14.360buyimg.com/n0/jfs/t1/59366/29/6154/109311/5d43d3bdE20382df8/6afa924450c7e93a.jpg" />
    <p>儿童室内滑梯</p>
    <span>线性缓冲，不跌小屁股</span>
    <pre>￥168</pre>
  </van-grid-item>
  <van-grid-item>
    <van-image style="width:80px; height:80px;" src="https://img30.360buyimg.com/popWareDetail/jfs/t7048/268/1571856663/293279/9fc6e5ff/5982d1deN097035f7.jpg" />
    <p>儿童篮球架</p>
    <span>可升降的室内玩具</span>
    <pre>￥668</pre>
  </van-grid-item>
</van-grid>
    </div>
</template>
<script>
export default {
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        }
    },
    data() {
        return {
            SwiperImg: [
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34869/14/3703/113972/5cb953c1E4294d8ea/b73c538710f5c462.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34729/14/3948/120618/5cbeee07Efbe17ec5/d57ddd4fbbbc09e0.jpg!cr_1125x549_0_72!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34423/17/5378/97852/5cbecd7bE73730c2f/76e5359d8fb3a1e1.jpg!cr_1125x549_0_72!q70.jpg.dpg"
      ]

      
        }
    },
}
</script>
<style lang="" scoped>
    .swiper{
     width: 100%;
     height: 5.4rem;
     margin-top: 46px;}
    .van-swipe{
      width: 100%;height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: #fff;
    }
    .out{
        width: 94%;
        height: 140px;
        /* background: #ddffdd; */
        overflow: hidden;
        border-radius:8%; 
        position: relative;
        top: -10px;
        left: 3%;
    }
    span{
        font-size: 12px;
        color: cadetblue;
        float: left;
    }
   
</style>