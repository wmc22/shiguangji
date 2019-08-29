<template>
    <div class="inner">
       <van-nav-bar
  title="购物车"
  
  left-arrow
  @click-left="onClickLeft"
/>
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