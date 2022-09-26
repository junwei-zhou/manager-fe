<template>
  <div class="login-wrapper">
    <div class="modal">
      <el-form ref="userForm" :model="user" status-icon :rules="rules">
        <div class="title">后台管理系统</div>
        <el-form-item prop="userName" class="prefix-icon">
          <span class="icon iconfont">&#xe7ae;</span>
          <el-input type="text" v-model="user.userName" prefix-icon="User" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item prop="userPwd" class="prefix-icon" >
          <span class="icon iconfont">&#xe763;</span>
          <el-input type="password" v-model="user.userPwd" prefix-icon="View" placeholder="请输入密码"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="login"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        user: {
          userName: "",
          userPwd: "",
        },
        rules: {
          userName: [
            {
              required: true,
              message: "请输入用户名",
              trigger: "blur",
            },
          ],
          userPwd: [
            {
              required: true,
              message: "请输入密码",
              trigger: "blur",
            },
          ],
        },
      }
    },
    methods: {
      login() {
        this.$refs.userForm.validate((valid) => {
          if (valid) {
            this.$request
              .post("/users/login", this.user, { mock: true })
              .then((res) => {
                this.$store.commit("saveUserInfo",res)
                this.$router.push("/welcome")
              })
          } else {
            return false
          }
        })
      },
    },
  }
  </script>
  
  
<style scoped>
  .login-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9fcff;
    width: 100vw;
    height: 100vh;
  }
  .modal {
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 3px #c7c9c4;
  }
  .title {
    font-size: 40px;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 30px;
  }
  .prefix-icon {
    position: relative;
    width: 100%;
    height: 100%;
  }
  input {
    width: 100%;
    height: 40px;
    line-height: 40px;
    /* border: none; */
    border: 1px solid #dcdddb;
    border-radius: 3px;
    padding: 0 20px 0 30px;
    color: #737472;
    font-size: 16px;
  }
  .icon {
    position: absolute;
    height: 20px;
    width: 20px;
    color: #c3c5c1;
    left: 10px;
    top: 5px;
  }
  .btn-login {
    width: 100%;
  }
  </style>
  