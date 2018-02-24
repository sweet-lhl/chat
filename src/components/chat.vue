<template>
    <div id="chat">
        <div class="flex-box flex-column">
            <div class="function-box">
                <div class="flex-box chat_1" style="height: 100%">
                    <div class="chatRoom overflow-y flex-box flex-column" id="scroll" v-chat-scroll>
                        <!--聊天面板-->
                        <!--特殊数据面板-->
                        <div class="system-message">
                            <span>这是一条系统消息！</span>
                        </div>
                        <div class="system-message">
                            <span>这是一条系统消息！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！</span>
                        </div>

                        <div class="other-message">
                            <div>other-message</div>
                            <span class="message-box message-box-active_1">这是其他人发出的消息！</span>
                            <img class="logo" src="../assets/logo.png" alt="other.logo">
                        </div>
                        <div class="my-message">
                            <div>my-message</div>
                            <span class="message-box message-box-active">这是自己发出的消息！</span>
                            <img class="logo" src="../assets/logo.png" alt="my.logo">
                        </div>
                        <div class="other-message">
                            <div>other-message</div>
                            <span class="message-box message-box-active_3">这是其他人发出的消息！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！</span>
                            <img class="logo" src="../assets/logo.png" alt="other.logo">
                        </div>
                        <div class="other-message">
                            <div>other-message</div>
                            <span class="message-box message-box-active_1">这是其他人发出的消息！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！</span>
                            <img class="logo" src="../assets/logo.png" alt="other.logo">
                        </div>
                        <div class="other-message">
                            <div>other-message</div>
                            <span class="message-box message-box-active_2">这是其他人发出的消息！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！</span>
                            <img class="logo" src="../assets/logo.png" alt="other.logo">
                        </div>
                        <div class="other-message">
                            <div>other-message</div>
                            <span class="message-box message-box-active_3">这是其他人发出的消息！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！</span>
                            <img class="logo" src="../assets/logo.png" alt="other.logo">
                        </div>
                        <div class="other-message">
                            <div>other-message</div>
                            <span class="message-box message-box-active_1">这是其他人发出的消息！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！</span>
                            <img class="logo" src="../assets/logo.png" alt="other.logo">
                        </div>
                        <div class="other-message">
                            <div>other-message</div>
                            <span class="message-box message-box-active_2">这是其他人发出的消息！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！很长哦！</span>
                            <img class="logo" src="../assets/logo.png" alt="other.logo">
                        </div>
                    </div>
                </div>
            </div>
            <div class="send-message flex-box gradColor_4">
                <!--消息发送面板-->
                <div class="message-type flex-box"><img @click.captrue="lowerEjection = true"
                                                        src="../assets/images/m_ico1.png" alt=""><img
                        src="../assets/images/m_ico2.png" alt=""></div>
                <div class="message-input flex-box bg-input"><input v-model="textContent" type="text"
                                                                    placeholder="聊天..."/>
                </div>
                <div class="message-send flex-box"><img src="../assets/images/m_ico3.png" alt=""></div>
            </div>
        </div>
        <yd-popup v-model="lowerEjection" position="bottom" height="15%">
            <div class="more flex-box col-5 justify-center align-center">
                <div>
                    <div class="am-icon-btn  am-icon-credit-card"></div>
                    <p>提现</p>
                </div>
                <div>
                    <div class="am-icon-btn am-icon-gift"></div>
                    <p>礼物</p>
                </div>
                <div>
                    <div class="am-icon-btn am-icon-envelope"></div>
                    <p>红包</p>
                </div>
                <div>
                    <div class="am-icon-btn am-icon-picture-o"></div>
                    <p>发图</p>
                </div>
                <div>
                    <div class="am-icon-btn am-icon-street-view"></div>
                    <p>签到</p>
                </div>
            </div>
        </yd-popup>
    </div>
</template>

<script>
    export default {
        name: "chat",
        data() {
            return {
                lowerEjection: false,//下部弹框
                textContent: '',//发送的内容
                text_Content: [],//存储发送内容
            }
        }
    }
</script>

<style scoped>
    .more > * {
        text-align: center;
    }

    .am-icon-credit-card:before{
        font-size: 1.4rem;
        color: #fe0000;
    }
    .am-icon-envelope:before {
        font-size: 1.4rem;
        content: "\f0e0";
        color: #fe0000;
    }
    .am-icon-gift:before {
        font-size: 1.4rem;
        content: "\f06b";
        color: #fe0000;
    }
    .am-icon-picture-o:before {
        font-size: 1.4rem;
        color: #3bb4f2;
        content: "\f03e";
    }
    .am-icon-street-view:before {
        font-size: 1.4rem;
        color: #3bb4f2;
        content: "\f21d";
    }

    .am-icon-btn {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: inline-block;
        width: 48px;
        height: 48px;
        font-size: 24px;
        line-height: 48px;
        border-radius: 50%;
        background-color: #eee;
        color: #555;
        text-align: center;
    }
</style>