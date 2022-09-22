

<template>
  <h1>进入登录页面</h1>
  <el-button @click="goHome">回到welcome</el-button>
</template>

<script>
  //传统的跳转方式
export default{
  name:"login",
  methods:{
    goHome(){
      this.$router.push('/welcome')
    }
  },
}
</script>
<style>
</style>
