import Vue from 'vue'
import App from './App.vue'
import "./assets/css/basic.scss"


import VueRouter from "vue-router"
Vue.use(VueRouter);

import VueResource from "vue-resource"
Vue.use(VueResource)

//1创建组件
import Home from "./components/Home.vue"
import Content from "./components/Content.vue"
import News from "./components/News.vue"
import User from "./components/User.vue"
  import UserAdd from "./components/User/UserAdd.vue"
  import UserList from "./components/User/UserList.vue"

//2 配置路由
const routes = [
  {path:"/home",component:Home},
  {path:"/news",component:News},
  {path:"/content/:aid",component:Content},
  {path:'*',redirect:"/home"}, /*默认跳转路由*/
  {
    path:"/user",   /*父子路由嵌套 user路由下嵌套两个子路由 通过children属性*/
    component:User,
    children:[
      {path:"useradd",component:UserAdd},   /*这里 路径不加斜杠 注意*/
      {path:"userlist",component:UserList}
    ]
  }
]

//3 实例化vue-router 
const router  = new VueRouter({
  mode:"history",
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
