<template>
    <div id="signIn">
        <div class="signIn">
            <div class="flex-box col-2 text-center">
                <div><span :class="[login===1?'active':'']" @click.capture="login=1">快速登录</span></div>
                <div><span :class="[login===0?'active':'']" @click.capture="login=0">快速注册</span></div>
            </div>
            <div v-if="login===1" class="signIn_1">
                <div class="flex-box align-center">
                    <span class="fa fa-user"></span>
                    <input type="text" placeholder="请输入用户名">
                </div>
                <div class="flex-box align-center">
                    <span class="fa fa-key"></span>
                    <input type="password" placeholder="请输入密码">
                </div>
            </div>
            <div v-else class="signIn_1">
                <div class="flex-box align-center">
                    <span class="fa fa-user"></span>
                    <input type="text" placeholder="2-16位字符">
                </div>
                <div class="flex-box align-center">
                    <span class="fa fa-key"></span>
                    <input type="password" placeholder="登录密码">
                </div>
                <div class="flex-box align-center">
                    <span class="fa fa-key"></span>
                    <input type="password" placeholder="确认登录密码">
                </div>
                <div class="flex-box align-center">
                    <yd-icon name="qq" size="1rem" color="#c7c7c7"></yd-icon>
                    <input type="password" placeholder="请输入QQ">
                </div>
            </div>
            <div v-if="login===1" style="text-align: center">
                <input type="checkbox"/><span style="font-size: .65rem">15天内自动登录</span>
            </div>
            <yd-button size="large" type="primary">{{login===1?'登录':'注册'}}</yd-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sign-in",
        data() {
            return {
                login: 1,
            }
        }
    }
</script>

<style scoped>
#signIn{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #ffffff;
    padding-top: .5rem;
}

    .signIn{
        width: 80%;
        margin: auto;
        font-size: .9rem;
    }
    .signIn>*:first-child>*>*{
        display: inline-block;
        padding: .5rem 0;
        color: #999999;
    }
    .signIn_1{
        margin-top: 1.5rem;
    }
.signIn_1>*{
    border:1px solid #c7c7c7;
    margin: 1rem 0;
    line-height: 2.2rem;
    height: 2.2rem;
}

    .signIn_1>*>*:first-child{
        text-align: center;
        border-right:1px solid #c7c7c7;
        flex-basis: 15%;
        -webkit-flex-basis: 15%;
    }
.signIn_1>*>*:last-child{
    padding-left: .5rem;
        flex-basis: 80%;
        -webkit-flex-basis: 80%;
    }
.active{
    color: #2795dc !important;
    border-bottom:1px solid #2795dc;
}
.yd-icon-ucenter:before{
    font-size: 1rem;
}
.yd-btn-primary{
    line-height: 2.2rem;
    height: 2.2rem;
    font-size: .7rem;
    background-color: #2795dc !important;
}
</style>