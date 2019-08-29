<template>
  <div>
    <router-view></router-view>
    <div class="out">
      <van-cell-group>
        <van-field
          v-model="username"
          @blur="user()"
          required
          clearable
          label="用户名"
          left-icon="manager"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
        />
        <span v-if="isshow1" style="color:red">请输入正确的用户名</span>

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
        <span v-if="isshow2" style="color:red">请输入正确的密码</span>
        <van-checkbox v-model="checked">记住密码</van-checkbox>
      </van-cell-group>
      <van-divider />
    </div>

    <div class="btn">
      <van-button
        type="primary"
        size="large"
        :disabled="disabled"
        color="DarkSalmon"
        @click="login()"
      >登录</van-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      checked: true,
      isshow1: false,
      isshow2: false,
      disabled: true
    };
  },
  methods: {
    // 用户名验证
    user() {
      let userReg = /^[a-zA-Z0-9]{3,6}$/;
      if (userReg.test(this.username)) {
        this.isshow1 = false;
      } else {
        this.isshow1 = true;
      }
      if (this.isshow1 == false && this.isshow2 == false) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },

    //密码验证
    mima() {
      let pswReg = /^[a-zA-Z0-9]{5,8}$/;
      if (pswReg.test(this.password)) {
        this.isshow2 = false;
      } else {
        this.isshow2 = true;
      }
      if (this.isshow1 == false && this.isshow2 == false) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },

    //登录
    login() {
      if (this.username == "" || this.password == "") {
        alert("信息不能为空");
      } else {
        axios({
          url: "http://jx.xuzhixiang.top/ap/api/login.php",
          params: {
            username: this.username,
            password: this.password
          }
        }).then(data => {
          console.log(data);
          if (data.data.code == 1) {
            var arr = [];
            if (this.checked == true) {
               arr.push(this.username);
              arr.push(this.password);
              localStorage.setItem("token", arr);
            } else if (this.checked == "") {
              arr.push(this.username);
              localStorage.setItem("token", arr);
            }
            this.$router.push("/home");
          }else{
            alert("用户名或密码错误")
           this.$router.go(0)
          }
        });
      }
    }
  }
};
</script>
<style lang="" scoped>
.out {
  position: absolute;
  top: 50%;
  width: 100%;
}
.btn {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.rou {
  position: absolute;
  top: 80%;
}
</style>