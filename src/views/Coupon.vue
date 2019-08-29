<template>
    <div class="inner">
       <van-nav-bar
  title="优惠卷"
  :fiexd="true"
  left-arrow
  @click-left="onClickLeft"
/>
<!-- 优惠券单元格 -->
<van-coupon-cell
  :coupons="coupons"
  :chosen-coupon="chosenCoupon"
  @click="showList=true"
/>
<van-coupon-cell
  :coupons="coupons"
  :chosen-coupon="chosenCoupon"
  @click="showList=true"
/>
<van-coupon-cell
  :coupons="coupons"
  :chosen-coupon="chosenCoupon"
  @click="showList=true"
/>

<!-- 优惠券列表 -->
<van-popup v-model="showList" position="bottom">
  <van-coupon-list
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    :disabled-coupons="disabledCoupons"
    @change="onChange"
    @exchange="onExchange"
  />
  
</van-popup>
    </div>
</template>
<script>
const coupon = {
  id: 1, // 优惠券id
  discount: 0, // 折扣券 折值 整数 为0不显示折
  denominations: 300, // 优惠券金额 单位分
  originCondition: 0, // 满减规则金额 单位分 为0显示无门槛
  value: 12, // 折扣券优惠金额，单位分
  name: '新用户专享', // 优惠券名称
  description: '欢迎新用户', // 描述信息
  reason: '您已经是老用户了', // 不可用原因，优惠券不可用时展示
  startAt: parseInt(1556337595530 / 1000), // 卡有效开始时间 (时间戳, 单位秒)
  endAt: parseInt(1559337595530 / 1000) // 卡失效日期 (时间戳, 单位秒)
}

export default {
     data() {
        return {
    showList:false,
    sumloading:false,
    sumdisabled:false,
    couponcode:'',
    value:2,
goodsprice:499,
totalprice:0,
orderdesc:'',
     chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon]  
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1)
        },
onChange(index) {
      this.showList = false
      this.chosenCoupon = index
    },
    onExchange(code) {
      this.coupons.push(coupon)
    }
    },
   
}
</script>
<style lang="" scoped>
    
</style>