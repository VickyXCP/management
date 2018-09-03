<template>
    <div class="manage fillcontain">
        <el-row style="height: 100%">
            <el-col :span="4" style="background-color:#324157; min-height: 100%">
                <el-menu
                    :default-active="defaultActive"
                    class="el-menu-vertical-demo"
                    background-color="#324057"
                    text-color="#fff"
                    active-text-color="#20a0ff"
                >
                    <el-menu-item style="background-color: #324057 !important;" index="manage"><i
                        class="el-icon-menu"></i>首页
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span>数据管理</span>
                        </template>
                        <el-menu-item index="userList">用户列表</el-menu-item>
                        <el-menu-item index="shopList">商家列表</el-menu-item>
                        <el-menu-item index="foodList">食品列表</el-menu-item>
                        <el-menu-item index="orderList">订单列表</el-menu-item>
                        <el-menu-item index="adminList">管理员列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-plus"></i>
                            <span>添加数据</span>
                        </template>
                        <el-menu-item index="addShop">添加商铺</el-menu-item>
                        <el-menu-item index="addGoods">添加商品</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-picture"></i>
                            <span>图表</span>
                        </template>
                        <el-menu-item index="visitor">用户分布</el-menu-item>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-edit"></i>
                            <span>编辑</span>
                        </template>
                        <el-menu-item index="vueEdit">文本编辑</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>设置</span>
                        </template>
                        <el-menu-item index="adminSet">管理员设置</el-menu-item>
                    </el-submenu>
                    <el-submenu index="7">
                        <template slot="title">
                            <i class="el-icon-info"></i>
                            <span>说明</span>
                        </template>
                        <el-menu-item index="explain">说明</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20" style="height: 100%">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "manage",
        computed: {
            defaultActive () {
                return this.$route.path.replace ('/', '')
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../style/mixin";

    .el-menu-item {
        background-color: #1f2d3d !important;
    }
</style>
