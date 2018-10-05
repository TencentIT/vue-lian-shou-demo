<template>
    <!-- 路由的嵌套 1配置路由 2父路由里面配置子路由显示的地方<router-view></router-view> -->
    <div id="user">
        <h1>user page</h1>
       
        <div class="user">
            <div class="left">
                <ul>
                    <li>
                        <router-link to="/user/useradd">增加用户</router-link>
                    </li>
                    <li>
                        <router-link to="/user/userlist">用户列表</router-link>
                    </li>
                </ul>
            </div>
            <div class="right">
                显示区域
                <mt-button type="primary" size="small" @click.native="flag = true">选择用户头像</mt-button>

                <mt-actionsheet :actions="actions" v-model="flag"></mt-actionsheet>

                <router-view></router-view>
            </div>
        </div>
        <v-action-sheet></v-action-sheet>
    </div>
</template>
<script>
import ActionSheet from "./ActionSheet.vue"
    export default{
        data(){
           return{
                flag:false,
                actions:[]
           }

        },
       methods:{
           takePhoto(){
               alert("拍照")
           },
           openAlbum(){
               alert("从相册中选择")
           }
       },
       components:{
           vActionSheet:ActionSheet
       },
        mounted() {
            this.actions = [{
                name: '拍照',
                method: this.takePhoto
            }, {
                name: '从相册中选择',
                method: this.openAlbum
            }];
      
    }

    }
</script>

<style lang="scss">
   #user{ 
       color:black;
    .user{
        
        display:flex;
        $color1:red;
        .left{
            
            width:300px;
            border:1px solid $color1;
            min-height:200px;
        }
        .right{
            flex:1;
             border:1px solid $color1;
        }
    }
   }
</style>
