<template>
    <div>
       <div class="inner">
<van-button style="float: left;margin-top:20px" round type="danger" @click="come()" color="DarkSalmon">时光记</van-button>
 <div class="out">
<van-button style="margin:20px" round type="danger" @click="login()" color="DarkSalmon">登录</van-button>
<van-button style="float: right;margin-top:20px" round type="danger" @click="register()" color="DarkSalmon">注册</van-button>
        </div>
       </div>


       
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:"login",
    data() {
        return {
            
        }
    },
    methods: {
        come(){
            this.$router.push("/welcome")
        },
        login(){
            this.$router.push("/login")
        },
        register(){
            this.$router.push("/register")
        }
    },
    mounted() {
        
    },
}
</script>
<style lang="" scoped>
    .out{
        float: right;
    }
    .inner{
        position: absolute;
        background: #dcdcdc;
        width: 100%;
        height: 50%;
    }
</style>