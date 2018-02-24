<template>
    <div id="betting">
        <div class="bettingLogin flex-box col-2 justify-center align-center">
            <div>中彩网彩票</div>
            <div class="text-right">
                <yd-icon name="ucenter"></yd-icon>
                <p><span>登录</span></p>
                <p>注册</p>
            </div>
        </div>
        <div class="overflow-y function-box">
            <yd-slider autoplay="3000">
                <yd-slider-item>
                    <a href="http://www.zc070.com/lotteryV3/lottery.do">
                        <img src="https://yb6.me/img/vhOo/SvyOx8bpV.jpg">
                    </a>
                </yd-slider-item>
                <yd-slider-item>
                    <a href="http://www.zc070.com/lotteryV3/lottery.do">
                        <img src="https://yb6.me/img/vhOo/SvyOGNv83.jpg">
                    </a>
                </yd-slider-item>
                <yd-slider-item>
                    <a href="http://www.zc070.com/lotteryV3/lottery.do">
                        <img src="https://yb6.me/img/vhOo/SvyO1EI4u.png">
                    </a>
                </yd-slider-item>
            </yd-slider>
            <yd-rollnotice autoplay="2000">
                <yd-rollnotice-item><span class="otice"> 公告 </span>尊敬的会员：你好，</yd-rollnotice-item>
                <yd-rollnotice-item><span class="otice"> 公告 </span>近期发现很多</yd-rollnotice-item>
                <yd-rollnotice-item><span class="otice"> 公告 </span>不法分子冒充客服</yd-rollnotice-item>
            </yd-rollnotice>
            <div class="access flex-box">
                <div>
                    <yd-icon name="feedback" size="1.2rem" color="#edb93f"></yd-icon>
                    <p>存/取钱</p>
                </div>
                <div>
                    <yd-icon name="feedback" size="1.2rem" color="#e62d24"></yd-icon>
                    <p>投注记录</p>
                </div>
                <div>
                    <yd-icon name="feedback" size="1.2rem" color="#52b653"></yd-icon>
                    <p>app下载</p>
                </div>
                <div>
                    <yd-icon name="feedback" size="1.2rem" color="#3c8efa"></yd-icon>
                    <p>在线客服</p>
                </div>
            </div>
            <div class="hall">
                <p>猜种大厅 <span>LOTTERY</span></p>
                <div>
                    <div>
                        <div><img src="../assets/logo.png"></div>
                        <p>分分彩</p>
                    </div>
                    <div>
                        <div><img src="../assets/logo.png"></div>
                        <p>分分彩</p>
                    </div>
                    <div>
                        <div><img src="../assets/logo.png"></div>
                        <p>分分彩</p>
                    </div>
                    <div>
                        <div><img src="../assets/logo.png"></div>
                        <p>分分彩</p>
                    </div>
                    <div>
                        <div><img src="../assets/logo.png"></div>
                        <p>分分彩</p>
                    </div>
                    <div>
                        <div><img src="../assets/logo.png"></div>
                        <p>分分彩</p>
                    </div>
                    <div>
                        <div><img src="../assets/logo.png"></div>
                        <p>分分彩</p>
                    </div>
                </div>
            </div>
        </div>
        <!--投注页尾-->
        <div class="send flex-box col-4 justify-center">
            <div>
                <yd-icon name="home-outline" size="1rem"></yd-icon>
                <p>投注大厅</p>
            </div>
            <div>
                <div class="icon icon-app"></div>
                <p class="icon-top">购彩大厅</p>
            </div>
            <div>
                <div class="icon icon-gift"></div>
                <p class="icon-top">开奖公告</p>
            </div>
            <div>
                <yd-icon name="ucenter-outline" size="1rem"></yd-icon>
                <p>个人中心</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "betting"
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
</style>