<template>
    <div>
        <!-- <h1>news page</h1> -->
        <ul class="list">
            <li v-for="(item , key) in list" :key="key">
                <router-link :to="'/content/'+item.aid">{{item.title}}</router-link>
            </li>
        </ul> 
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:[]
            }
        },
        mounted(){
            this.requestData()
        }
        ,
        methods:{
              requestData(){
                var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
               
               //jsonp方式
                this.$http.jsonp(api).then((response)=>{
                    // console.log(response)
                    this.list = response.body.result
                },(err)=>{
                    console.log(err)
                })
            }
        }
    }
</script>
<style lang="scss">
  
   

    .list{
        li{
            height:3.4rem;
            line-height: 3.4rem;
            border-bottom:1px solid #eee;
            font-size:1.6rem;
            margin-bottom:1.5rem;
            a{
                color:#666;
            }
        }
    }

</style>
