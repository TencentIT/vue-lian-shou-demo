<template>
    <div id="user">
        <h1>user page</h1>
        <div class="user">
            <div class="left">
                <ul>
                    <li>增加用户</li>
                    <li>用户列表</li>
                </ul>
            </div>
            <div class="right">
                显示区域
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    
</script>

<style lang="scss">
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
</style>
