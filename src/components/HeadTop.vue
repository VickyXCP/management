<template>
    <div class="head_top">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in $router.meta" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-dropdown @command="handleCommand" menu-align="start">
            <!--<img :src="baseImgPath + adminInfo.avatar" alt="hhh" class="avator">-->
            <img src="../assets/img/avator.jpg" alt="hhh" class="avator">
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="home">首页</el-dropdown-item>
                <el-dropdown-item command="signout">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    import {baseImgPath} from '../config/env'
    import {signout} from '../api/getData'
    import {mapState, mapActions} from 'vuex'

    export default {
        name: "HeadTop",
        data () {
            return {
                baseImgPath,
            }
        },
        created () {
            if (! this.adminInfo.id) {
                this.getAdminData ()
            }
        },
        computed: {
            ...mapState ({
                adminInfo: state => state.adminInfo
            })
        },
        methods: {
            ...mapActions (['getAdminData']),
            async handleCommand (command) {
                if (command == 'home') {
                    this.$router.push ('/manage')
                } else if (command == 'signout') {
                    const res = await signout()
                    if (res.status == 1) {
                        this.$message ({
                            type: 'success',
                            message: '退出成功'
                        })
                        this.$router.push ('/')
                    } else {
                        this.$message ({
                            type: 'error',
                            message: res.message
                        })
                    }
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../style/mixin.less";

    .head_top {
        background-color: #eff2f7;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
    }

    .avator {
        .wh(36px, 36px);
        border-radius: 50%;
        margin-right: 37px;
    }
</style>
