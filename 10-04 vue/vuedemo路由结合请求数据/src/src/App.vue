<template>
  <div id="app">
    <div class="header">
       <router-link to="/home">我是首页</router-link>
       <router-link to="/news">我是新闻</router-link>
        <router-link to="/user">我是用户</router-link>
    <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
.header{


    height:4.4rem;

    background:#000;

   

    line-height:4.4rem;

    text-align:center;

    a{
  
      color:black;
      padding:0 2rem

    }
  }
</style>
