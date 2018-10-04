<template>
    <div id="content">
        <h1>content page</h1>
        <ul>
            <li v-for="item in list" :key="item.aid" v-html="item.content">
               
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                list:[]
            }
        },
        mounted(){
            var aid = this.$route.params.aid;
            console.log(aid)
            this.requestData(aid);
        },
        methods:{
            requestData(aid){
                var api = "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid="+aid;
                this.$http.get(api).then((response)=>{
                    console.log(response.body.result)
                    this.list = response.body.result
                },(err)=>{
                    console.log(err)
                })
            }
        }
    }
</script>
<style lang="scss">
#content{
    color:black;
    padding:1rem;
    line-height: 2;
    img{
        max-width:100%;
    }
}
   
</style>
