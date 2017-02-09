<template>
    <el-row class="tac">
        <el-col>
            <el-menu mode="vertical" default-active="/vList" class="el-menu-vertical-demo" :router="true">
                <el-menu-item-group title="分组一">
                    <el-menu-item index="/vUp"><i class="el-icon-message"></i>导航一</el-menu-item>
                    <el-menu-item index="/vList"><i class="el-icon-message"></i>导航二</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组二">
                    <el-menu-item index="3"><i class="el-icon-message"></i>导航三</el-menu-item>
                    <el-menu-item index="4"><i class="el-icon-message"></i>导航四</el-menu-item>
                </el-menu-item-group>
            </el-menu>
        </el-col>
    </el-row>
</template>

<style type="text/css">
</style>

<script type="text/javascript">

    export default{

    }

</script>