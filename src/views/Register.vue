<template>
  <div>
    <router-view></router-view>
    <div class="out">
      <van-cell-group>
        <!-- 用户名 -->
        <van-field
          v-model="username"
          @blur="user()"
          required
          clearable
          label="用户名"
          left-icon="manager"
          placeholder="请输入用户名"
        />
        <span v-if="isshow1" style="color:red">用户名由长度为3-6的数字和字母组成</span>
        <!-- 密码 -->
        <van-field
          v-model="password"
          @blur="mima()"
          type="password"
          label="密码"
          placeholder="请输入密码"
          left-icon="lock"
          required
          clearable
        />
    <span v-if="isshow3" style="color:red">密码由长度为5-8的数字和字母组成</span>
    <!-- 邮箱 -->
        <van-field
          v-model="email"
          required
          clearable
          label="邮箱"
          left-icon="envelop-o"
          placeholder="请输入邮箱地址"
        />
        <!-- 手机号 -->
        <van-field
          v-model="phone"
          @blur="num()"
          required
          clearable
          label="电话"
          left-icon="phone"
          placeholder="请输入手机号"
        />
        <span v-if="isshow2" style="color:red">请输入正确的手机号</span>
      </van-cell-group>
      <van-divider />
    </div>
    <!-- 注册按钮 -->
    <div class="btn">
      <van-button type="primary" size="large" :disabled="disabled" color="DarkSalmon" @click="tap()">注册</van-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import router from "../router"
import qs from 'Qs'
export default {
  name: "register",
  data() {
    return {
      username: "",
      password: "",
      email: "",
      phone: "",
     isshow1: false,
      isshow2: false,
      isshow3: false,
      disabled: true
    };
  },
  methods: {
    user(){
        let userReg = /^[a-zA-Z0-9]{3,6}$/;
        var _this = this;
        if(userReg.test(this.username)){
            this.isshow1=false;
        }else{
            this.isshow1=true;
        }
         if (
        this.isshow1 == false &&
        this.isshow2 == false &&
        this.isshow3 == false
      ) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    mima(){
        let pswReg = /^[a-zA-Z0-9]{5,8}$/;
      if (pswReg.test(this.password)) {
        this.isshow3 = false;
      } else {
        this.isshow3 = true;
      }
      if (
        this.isshow1 == false &&
        this.isshow2 == false &&
        this.isshow3 == false
      ) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    num(){
  let numberReg = /^1[34578]\d{9}$/;
 var _this = this;
  if (numberReg.test(this.phone)) {
        this.isshow2 = false;
      } else {
        this.isshow2 = true;
      }
      if (
        this.isshow1 == false &&
        this.isshow2 == false &&
        this.isshow3 == false
      ) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
      tap() {
      if (this.username == "" || this.password == "" || this.phone == ""|| this.email=="") {
        alert("信息不能为空");
      } else {
       // var _this = this;
        axios({
          url: "http://jx.xuzhixiang.top/ap/api/reg.php",
          params: {
            username: this.username,
            password: this.password
          }
        }).then(res=>{
           console.log(res.data.code);
          if (res.data.code == 1) {
             alert(res.data.msg)
            // this.$store.commit("login", data.data);
           this.$router.push("/login");
          }else{
            alert("用户名重复")
          }
        }).catch(error=>{
            console.log(error);
        });
      }
    }

  },
  mounted() {}
};
</script>
<style lang="" scoped>
.out {
  position: absolute;
  top: 40%;
  width: 100%;
}
.btn {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>