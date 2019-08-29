<template>
    <div class="inner">
       <van-nav-bar
  title="我的订单"
  :fixed="true"
  left-arrow
  @click-left="onClickLeft"
/>
<div class="out">
<van-cell title="全部" icon="circle" value=""/>
<van-cell title="待付款" icon="balance-pay" value=""/>
<van-cell title="待收货" icon="logistics" value=""/>
<van-cell title="待发货" icon="paid" value=""/>
<van-cell title="已完成" icon="passed" value=""/>
<van-cell title="评价" icon="chat-o" value=""/>
<van-cell title="退款/售后" icon="refund-o" value=""/>
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