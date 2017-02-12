<template>
    <div>
        <el-menu theme="dark" default-active="/memberIndex" router mode="horizontal" >
            <el-menu-item  v-for="nav in this.$store.state.res.navBars" :index="nav.nav_url">{{nav.nav_text}}</el-menu-item>

        </el-menu>
    </div>
</template>

<style type="text/css">
    /*@import "http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css";*/
</style>

<script type="text/javascript">
    import  vueResource from "vue-resource";
    import  vue from "vue"
    vue.use(vueResource);
    export default{
        created(){
            this.$store.dispatch("loadData",{url:this.APIConfig.API_NavBar,key:"navBars"})
        },
        data(){
            return{
//                navBars
            }
        },
        computed:{
//            navBars:()=>{
//                return self.$store.state.res.navBars;
//            }
        }

    }

</script>