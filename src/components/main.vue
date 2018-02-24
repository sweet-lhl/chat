<template>
    <div id="main" class="game-plan">
        <div class="mainNavigation flex-box align-center">
            <div>
                <yd-button @click.native="leftPopUup = true">
                    <yd-icon name="type" size="1.2rem" color="#ffffff"></yd-icon>
                </yd-button>
            </div>
            <div>
                <div><img src="../assets/images/lotteryNetwork.png"></div>
                <p>360人在线</p>
            </div>
            <div class="flex-box">
                <div class="am-header-icon am-icon-credit-card"></div>
                <img @click.capture="$router.push({path:'/signIn',query:{}})"
                     src="http://zc998.vip/face/rebot/24.gif?1519440519">
            </div>
        </div>
        <div class="flex-box col-6 text-center cont-naw">
            <div :class="[tabKey===''?'active_nav':'']" @click.capture="$router.push({path:'/chat',query:{}});tabKey=''">聊天</div>
            <div :class="[tabKey===1?'active_nav':'']" @click.capture="$router.push({path:'/betting',query:{}});tabKey=1">投注</div>
            <div :class="[tabKey===2?'active_nav':'']" @click.capture="$router.push({path:'/service',query:{}});tabKey=2">客服</div>
            <div :class="[tabKey===3?'active_nav':'']" @click.capture="$router.push({path:'/lottery',query:{}});tabKey=3">开奖</div>
            <div :class="[tabKey===4?'active_nav':'']" @click.capture="$router.push({path:'/canon',query:{}});tabKey=4">宝典</div>
            <div :class="[tabKey===5?'active_nav':'']" @click.capture="$router.push({path:'/broadcast',query:{}});tabKey=5">直播</div>
        </div>
        <router-view></router-view>
        <!--左弹窗-->
        <yd-popup v-model="leftPopUup" position="left" width="85%">
            <div class="onlineNumber">
                <div v-for="x in onlineNumber" :key="x.private_1">
                    <p v-text="x.private_1"></p>
                    <div class="flex-box onlineNumberGroup" v-for="y in x.member">
                        <div><img src="../assets/images/member.png"></div>
                        <div v-text="y.content"></div>
                        <div><img src="../assets/images/member.png"></div>
                    </div>
                </div>
            </div>
        </yd-popup>
    </div>
</template>

<script>
    export default {
        name: 'main',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                tabKey: '',//导航切换
                leftPopUup: false,//左弹窗
                onlineNumber: [{
                    private_1: '私聊会话',
                    member: [{
                        content: '直播室管理员'
                    }]
                }, {
                    private_1: '在线管理/客服',
                    member: [{
                        content: '直播室管理员'
                    }]
                }, {
                    private_1: '在线会员',
                    member: [{
                        content: '游客1234'
                    }, {
                        content: '直播室管理员'
                    }, {
                        content: '85454327'
                    }, {
                        content: '感受到法国'
                    }, {
                        content: 'kjhgk'
                    }, {
                        content: 'werwtr'
                    }, {
                        content: '.'
                    }, {
                        content: '156798655323'
                    }, {
                        content: 'sdfafasdf'
                    }, {
                        content: '是打发打发斯蒂芬'
                    }, {
                        content: 'xzcvzxv '
                    }, {
                        content: '任务热无若'
                    }, {
                        content: 'sadfasfa'
                    },]
                }],//在线人数
            }
        },
        watch: {
            //将固定聊天滚动条在底部
            text_Content() {
                this.$nextTick(() => {
                    if (this.text_Content.length > 0) {
                        let container = this.$el.querySelector("#scroll");
                        container.scrollTop = container.scrollHeight;
                    }
                })
                //  document.getElementById('chatContainer').scrollTop = document.getElementById('chatContainer').scrollHeight+150;
            },
        },
        computed: {},
        created() {
            this.$router.replace('/chat')// 禁止記住歷史，提供全屏方案的主文件不需要一個歷史紀錄！
        },
        mounted() {

        },
        methods: {
            keyboard() {
                this.$dialog.toast({
                    mes: '正在开发中...',
                    timeout: 1500,
                    icon: 'error'
                });
            },
        },
        destroyed() {

        }
    }
</script>

<style>
    select {
        border-radius: .3rem;
    }

    .consultation {
        background-color: #eeeeee;
    }

    .consultation > *:first-child {
        padding-top: .5rem;
        margin: 0 .2rem;
    }

    .consultation > *:first-child > *:first-child {
        padding-left: .3rem;
        border-left: 2px solid #f85417;
    }

    .consultation > *:first-child > *:last-child {
        text-align: right;
    }

    select {
        -webkit-appearance: menulist !important;
    }

    header {
        position: relative !important;
        margin-top: .1rem;
    }

    .service_1 {
        align-items: center;
        padding: .3rem;
        margin: .5rem 0;
        background-color: #ffffff;
    }

    .service {
        align-items: center;
        padding: .5rem .2rem;
        margin: 0 .5rem;
        border-bottom: 1px solid #c6c6c6;
    }

    .service > *, .service_1 > * {
        align-items: center;
        font-size: 0;
    }

    .service > *:last-child {
        padding: .1rem .5rem;
        background-color: #fdc965;
        color: #ffffff;
        border-radius: .2rem;
    }

    .service_1 > * > *:first-child {
        margin-right: .4rem;
    }

    .service > * > *:last-child, .service_1 > * > *:last-child {
        font-size: .7rem;
    }

    .hall {
        background-color: #eeeeee;
    }

    .hall > *:first-child {
        padding-left: .4rem;
        font-size: 1.2rem;
        line-height: 1.8rem;
        color: #967f7f;
    }

    .hall > *:first-child > * {
        margin-left: .2rem;
        color: #d2d2d2;
    }

    .hall > *:last-child {
        padding: 0 .5rem;
    }

    .hall > *:last-child > * {
        color: #666666;
        display: inline-block;
        width: 31.3%;
        padding: 1rem 0;
        margin: 0 .5% .2rem;
        text-align: center;
        border-radius: .3rem;
        background-color: #fdfdfd;
    }

    .img_group_1 {
        width: .9rem;
        height: .9rem;
        border-radius: 100%;
    }

    .hall > *:last-child > * > *:first-child > *, .img_group {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 100%;
    }

    .access {
        height: 3rem;
        align-items: center;
        border-bottom: 1px solid #c6c6c6;
    }

    .access > * {
        display: inline-block;
        width: 25%;
        text-align: center;
    }

    .access > *:not(:last-child) {
        border-right: 1px dashed #c6c6c6;
    }

    .access > * > *:last-child {
        margin-top: .1rem;
    }

    .access > *:first-child > *:last-child {
        color: #edb93f;
    }

    .access > *:nth-child(2) > *:last-child {
        color: #e62d24;
    }

    .access > *:nth-child(3) > *:last-child {
        color: #52b653;
    }

    .access > *:last-child > *:last-child {
        color: #3c8efa;
    }

    .otice {
        color: #F00;
        padding: 0 .2rem;
        margin: 0 .4rem;
        border: 1px solid red;
        border-radius: .2rem;
    }

    .onlineNumber > * > *:first-child {
        padding-left: .4rem;
        font-size: .7rem;
        line-height: 1.2rem;
        color: #999999;
    }

    .onlineNumberGroup {
        margin: 0 .8rem 0 .2rem;
        height: 2.2rem;
        align-items: center;
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    }

    .onlineNumberGroup > *:first-child, .onlineNumberGroup > *:last-child {
        font-size: 0;
        align-items: center;
        flex-basis: 15%;
        -webkit-flex-basis: 15%;
    }

    .onlineNumberGroup > *:nth-child(2) {
        text-align: left;
        padding-left: .4rem;
        font-size: .8rem;
        flex-basis: 70%;
        -webkit-flex-basis: 70%;
    }

    .onlineNumberGroup > *:first-child > * {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 100%;
    }

    .onlineNumberGroup > *:last-child > * {
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 100%;
    }

    .yd-btn-primary {
        background-color: #333c59 !important;
        height: 100% !important;
    }

    .mainNavigation {
        font-size: .7rem;
        z-index: 12;
        height: 2.4rem;
        background-color: #333c59;
        align-items: center;
    }

    .mainNavigation > * {
        text-align: center;
    }

    .mainNavigation > *:first-child {
        flex-basis: 15%;
        -webkit-flex-basis: 15%;
    }

    .mainNavigation > *:last-child {
        flex-basis: 25%;
        -webkit-flex-basis: 25%;
    }

    .mainNavigation > *:nth-child(2) {
        color: white;
        flex-basis: 60%;
        -webkit-flex-basis: 60%;
    }

    .mainNavigation > *:last-child > * {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 100%;
    }

    .mainNavigation > *:last-child > *:last-child {
        margin-left: .2rem;
        border: 2px solid #FFFFFF;
    }

    .mainNavigation > *:nth-child(2) > * {
        vertical-align: middle;
        justify-content: center;
    }

    .mainNavigation > *:nth-child(2) > *:first-child > * {
        width: 6rem;
    }

    .mainNavigation > *:nth-child(2) > * > * {
        vertical-align: middle;
        display: inline-block;
        font-size: 1.33rem;
        padding: 0 .4rem;
        line-height: 2.5rem;
    }

    .cont-naw {
        font-size: .7rem;
        color: #666;
        margin-top: .1rem;
        line-height: 2rem;
        background-color: #eeeeee;
    }

    .cont-naw > * {
        position: relative;
    }

    .active_nav {
        background-color: white;
        color: #333c59;
    }

    .active_nav:before {
        content: '';
        bottom: 0;
        left: 50%;
        margin-left: -6px;
        position: absolute;
        border-right: 6px solid transparent;
        border-bottom: 6px solid #333c59;
        border-left: 6px solid transparent;
    }

    .message-box {
        position: relative;
    }

    .send-message {
        height: 2.2rem;
    }

    .send-message, .send, .send_1 {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(238, 238, 238, 0.33);
        border-top: 1px solid #858585;
        padding: .1rem 0;
    }

    .send {
        height: 2.2rem;
        background-color: #171719;
        color: white;
    }

    .send_1 {
        height: 3rem;
        background-color: #171719;
        color: white;
    }

    .send > *, .send_1 > * {
        text-align: center;
    }

    .send > * > *:last-child, .send_1 > * > *:last-child {
        line-height: .7rem;
        font-size: .6rem;
    }

    .send_1 > * > *:last-child {
        color: #efbb00;
    }

    .send-message *:not(.message-type):not(.message-send):not(.message-input) {
        display: block;
        line-height: 1.6rem;
        text-align: center;
    }

    .chatRoom {
        width: 100%;
        flex-basis: 100%;
        -webkit-flex-basis: 100%;
        background-color: #f8f8f8;
    }

    .chatRoom > * {
        margin: .6rem 0;
        display: flex;
        display: -webkit-flex;
        max-width: 90%;
    }

    .chatRoom .logo {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 100%;
    }

    .message-type, .message-send, .message-input {
        height: 100%
    }

    .message-type {
        color: #8b8b8b;
        align-items: center;
        width: 3.4rem;
        flex-basis: 3.4rem;
        -webkit-flex-basis: 3.4rem;
    }

    .message-send {
        align-items: center;
        justify-content: center;
    }

    .message-type > *, .message-send > * {
        width: 1.4rem;
        height: 1.4rem;
        margin: 0 .2rem;
    }

    .message-send > * {
        border-radius: 50%;
    }

    .message-input {
        color: #000;
        width: calc(100% - 6rem);
        flex-basis: calc(100% - 6rem);
        -webkit-flex-basis: calc(100% - 6rem);
        height: 90%;
        align-items: center;
        margin-right: .1rem;
        margin-left: .2rem;
    }

    .function-box {
        position: absolute;
        width: 100%;
        top: 4.5rem;
        bottom: 2.2rem;
    }

    .function-box_1 {
        position: absolute;
        width: 100%;
        top: 6.7rem;
        bottom: 3rem;
    }

    .message-input > input {
        width: 100%;
        text-align: left !important;
        padding: 0 .23rem;
        text-indent: 6px;
        border-radius: .3rem;
        border: 1px solid #858585;
    }

    .message-send {
        width: 2.4rem;
        flex-basis: 2.4rem;
        -webkit-flex-basis: 2.4rem;
        color: rgb(210, 193, 41);
    }

    .system-message {
        -webkit-align-self: center;
        align-self: center;
        background-color: rgba(188, 188, 192, 0.8);
        border-radius: 3px;
        padding: .23rem;
        font-size: .5rem;
        color: #4a4a4a
    }

    .my-message {
        -webkit-align-self: flex-end;
        align-self: flex-end;
        font-size: .65rem;
    }

    .my-message > *:first-child {
        position: absolute;
        right: 2rem;
        top: -.5rem;
    }

    .other-message > *:first-child {
        position: absolute;
        left: 2rem;
        top: -.5rem;
    }

    .other-message {
        -webkit-align-self: flex-start;
        align-self: flex-start;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
        font-size: .65rem;
    }

    .my-message .message-box {
        margin-right: .4rem;
    }

    .other-message .message-box {
        margin-left: .4rem;
    }

    .my-message .message-box, .other-message .message-box {
        max-width: calc(100% - 1.6rem);
        padding: .23rem;
        white-space: normal;
        margin-top: .5rem;
    }

    .my-message .message-box {
        border-radius: 3px 0 3px 3px;
    }

    .other-message .message-box {
        border-radius: 0 3px 3px 3px;
    }

    .message-box-active_1 {
        background-color: #e7ebf2;
    }

    .message-box-active_2 {
        background: -moz-linear-gradient(left, #f44534, #f8741a);
        background: -o-linear-gradient(left, #f44734, #f8741a);
        background: -webkit-gradient(linear, 0% 0%, 100% 0%, from(#f44734), to(#f8741a));
    }

    .message-box-active_3 {
        background: -moz-linear-gradient(left, #a649be, #5766db);
        background: -o-linear-gradient(left, #a649be, #5766db);
        background: -webkit-gradient(linear, 0% 0%, 100% 0%, from(#a649be), to(#5766db));
    }

    .message-box-active {
        background-color: #41b883;
    }

    .message-box-active_1:before, .message-box-active_2:before, .message-box-active_3:before {
        content: '';
        top: -4px;
        left: -4px;
        position: absolute;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        transform: rotate(-90deg);
    }

    .message-box-active:after {
        content: '';
        top: -4px;
        position: absolute;
        border-left: 8px solid #41b883;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        transform: rotate(90deg);
    }

    .message-box-active_1:before {
        border-right: 8px solid #e7ebf2;
    }

    .message-box-active_2:before {
        border-right: 8px solid #f44734;
    }

    .message-box-active_3:before {
        border-right: 8px solid #a649be;
    }

    .my-message .message-box > *:last-child {
        background-color: #4c95ff;
        color: #fff;
        margin-right: .2rem;
        padding: .2rem;
        margin-top: .2rem;
        border-radius: .2rem;
        text-align: justify
    }

    .my-message .message-box > *:first-child {
        text-align: right;
    }

    .other-message .message-box > *:last-child {
        background-color: #bddaff;
        color: black;
        margin-left: .2rem;
        padding: .2rem;
        margin-top: .2rem;
        border-radius: .2rem;
        text-align: justify
    }

    .message-box > *:last-child > img {
        max-width: 4rem;
        display: block;
    }

    .icon-app:before, .icon-gift:before {
        font-size: 1rem;
    }

    .icon-top {
        margin-top: .1rem;
    }

    .smallIcons {
        width: 1.5rem;
        height: 1.5rem;
    }

    [class*=am-icon-] {
        display: inline-block;
        font-style: normal;
    }

    .am-header-default .am-header-icon {
        font-size: 1rem;
        color: white;
    }

    [class*=am-icon-]:before {
        display: inline-block;
        font: normal normal normal 1.6rem/1 FontAwesome, sans-serif;
        font-size: inherit;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-transform: translate(0, 0);
        -ms-transform: translate(0, 0);
        transform: translate(0, 0);
    }

    .am-icon-credit-card:before {
        content: "\f09d";
        font-size: 1.4rem;
        color: #ffffff;
        margin-top: .1rem;
    }
    .lottery{
        padding: .3rem 0;
        border-bottom: 1px dashed #999;
        overflow: hidden;
    }
    .lottery > *:first-child {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: center;
        flex-basis: 15%;
        -webkit-flex-basis: 15%;
    }

    .lottery > *:last-child {
        flex-basis: 85%;
        -webkit-flex-basis: 85%;
    }

    .lottery > *:last-child > * {
        font-size:0;
    }
    .lottery > *:last-child > *>*{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 0 .2rem;
        display: inline-block;
        font-size: .6rem;
    }

    .lottery > *:last-child > *:last-child > * {
        display: inline-block;
        margin: .1rem;
        padding: .2rem .35rem;
        color: #eeeded;
        font-size: .7rem;
        border-radius: .1rem;
    }

    .lottery > *:last-child > *:last-child > *:first-child {
        background-color: #5f5a5a;
    }

    .lottery > *:last-child > *:last-child > *:nth-child(2) {
        background-color: #4b4b4b;
    }

    .lottery > *:last-child > *:last-child > *:nth-child(3) {
        background-color: #008fff;
    }

    .lottery > *:last-child > *:last-child > *:nth-child(4) {
        background-color: #ff7600;
    }

    .lottery > *:last-child > *:last-child > *:nth-child(5) {
        background-color: #098504;
    }

    .lottery > *:last-child > *:last-child > *:nth-child(6) {
        background-color: #ff2600;
    }
    .lottery > *:last-child > *:last-child > *:nth-child(7) {
        background-color: #780b00;
    }
    .lottery > *:last-child > *:last-child > *:nth-child(8) {
        background-color: #5234ff;
    }
    .lottery > *:last-child > *:last-child > *:nth-child(9) {
        background-color: #ff0000;
    }
    .lottery > *:last-child > *:last-child > *:nth-child(10) {
        background-color: #237c7d;
    }

    /*   .chat_1 {
           background: url("../assets/images/chat_1.png") no-repeat;
           background-size: 100% 100%;
           -moz-background-size: 100% 100%;
           padding: .8rem .65rem .7rem .6rem;
       }*/


</style>
