<template>
    <div id="betting">
        <div v-if="tabKey===''" class="bettingLogin flex-box col-2 justify-center align-center">
            <div>中彩网彩票</div>
            <div class="text-right">
                <yd-icon name="ucenter"></yd-icon>
                <p><span>登录</span></p>
                <p>注册</p>
            </div>
        </div>
        <div v-if="tabKey===0" class="hurchasing flex-box col-3 justify-center align-center">
            <p>购彩大厅</p>
            <div class="ui-toolbar-right ui-head">

            </div>
        </div>
        <div class="overflow-y function-box">
            <router-view></router-view>
        </div>
        <!--投注页尾-->
        <div class="send flex-box col-4 justify-center">
            <div :class="[tabKey===''?'active_betting':'']" @click.capture="$router.push({path:'/betting/bettingHome',query:{}});tabKey=''">
                <yd-icon name="home-outline" size="1rem"></yd-icon>
                <p>投注大厅</p>
            </div>
            <div :class="[tabKey===0?'active_betting':'']" @click.capture="$router.push({path:'/betting/hurchasingHall',query:{}});tabKey=0">
                <div class="icon icon-app"></div>
                <p class="icon-top">购彩大厅</p>
            </div>
            <div :class="[tabKey===1?'active_betting':'']" @click.capture="$router.push({path:'/betting/drawNotice',query:{}});tabKey=1">
                <div class="icon icon-gift"></div>
                <p class="icon-top">开奖公告</p>
            </div>
            <div :class="[tabKey===2?'active_betting':'']" @click.capture="$router.push({path:'/betting/personalCenter',query:{}});tabKey=2">
                <yd-icon name="ucenter-outline" size="1rem"></yd-icon>
                <p>个人中心</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "betting",
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                tabKey: '',//导航切换
            }
        },
        created() {
            this.$router.replace('/betting/bettingHome')// 禁止記住歷史，提供全屏方案的主文件不需要一個歷史紀錄！
        },
    }
</script>

<style scoped>
    .function-box {
        top: 5.9rem !important;
    }

    .bettingLogin {
        padding: 0 .5rem;
        color: #ffffff;
        background-color: #ec2829;
        height: 1.5rem;
        line-height: 1.5rem;
    }
    .yd-icon-ucenter:before{
        font-size: .8rem;
        color: #ffed40;
    }
    .bettingLogin > * > * {
        display: inline-block;
    }
    .bettingLogin > * > *:nth-child(2)>*{
        padding: 0 .2rem;
        border-right: 1px solid #ffffff;
    }
    .active_betting{
        color: #cdbf0e;
    }
    .ui-head {
        background: url(../assets/images/goucai_qiehua_03.png) no-repeat;
        width: 2.25rem;
        background-size: 2.25rem 1rem;
        height: 1rem;
    }

    .ui-toolbar-right {
        background: url(../assets/images/goucai_qiehua_07.png) no-repeat;
        width: 2.25rem;
        background-size: 2.25rem 1rem;
        height: 1rem;
        position: relative;
        display: block;
    }
    .hurchasing{
        text-align: center;
        line-height: 1.5rem;
        background-color: #ec2829;
    }
    .hurchasing>*:first-child{
        flex-basis: 80%;
        -webkit-flex-basis: 80%;
    }
    .hurchasing>*:last-child{
        flex-basis: 15%;
        -webkit-flex-basis: 15%;
    }
</style>