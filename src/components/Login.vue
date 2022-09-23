<template>
  <h1>进入登录页面</h1>
  <el-button @click="goHome">回到welcome</el-button>
</template>

<script>
  //传统的跳转方式
import Welcome from "./Welcome.vue"
export default{
  name:"login",
  components:{Welcome},
  mounted(){
    //  this.$request({
    //   method:'get',
    //   url:'/login',
    //   data:{name:"jack"}
    // }).then((res)=>{
    //   console.log(res)
    // })
    // 使用对象发起请求
    this.$request.get('/login',{name:'jack'},{mock:true}).then((res)=>{
      console.log(res)
    })
  },
  methods:{
    goHome(){
      this.$router.push('/welcome')
    }
  },
}
</script>
<style>
</style>
