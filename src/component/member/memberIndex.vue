<template>
    <el-row class="indexContent">
        <el-col :span="4">
            <leftMenu></leftMenu>
        </el-col>
        <el-col :span="14">
            <router-view></router-view>
        </el-col>
    </el-row>
</template>

<style type="text/css">
    .indexContent{
        padding: 10px;
    }
</style>

<script type="text/javascript">

    import  leftMenu from  "./leftMenu.vue"
    export default{
        data(){
            return{

            }
        },
        components:{
            leftMenu
        }
    }

</script>