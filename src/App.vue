

<template>
  <router-view></router-view>
</template>
<script >
export default{
  "name":"App",
  mounted(){
    this.$storage.setItem("name","jack")
    this.$storage.clearItem("name")
    this.$storage.clearAll()

  }
}
</script>
<style >
</style>
