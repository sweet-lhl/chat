import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const main = r => require.ensure([], () => r(require('../components/main.vue')), 'main'),//主頁面
    chat = r => require.ensure([], () => r(require('../components/chat.vue')), 'main'),//聊天
    betting = r => require.ensure([], () => r(require('../components/betting.vue')), 'main'),//投注
    bettingHome = r => require.ensure([], () => r(require('../components/bettingHome.vue')), 'main'),//投注大厅
    hurchasingHall = r => require.ensure([], () => r(require('../components/hurchasingHall.vue')), 'main'),//购彩大厅
    drawNotice = r => require.ensure([], () => r(require('../components/drawNotice.vue')), 'main'),//开奖公告
    personalCenter = r => require.ensure([], () => r(require('../components/personalCenter.vue')), 'main'),//个人中心
    service = r => require.ensure([], () => r(require('../components/service.vue')), 'main'),//客服
    lottery = r => require.ensure([], () => r(require('../components/lottery.vue')), 'main'),//开奖
    canon = r => require.ensure([], () => r(require('../components/canon.vue')), 'main'),//宝典
    broadcast = r => require.ensure([], () => r(require('../components/broadcast.vue')), 'main'),//直播
    signIn = r => require.ensure([], () => r(require('../components/signIn.vue')), 'main')//登录&注册
;

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
        children: [
            {
                path: 'chat',
                name: 'chat',
                component: chat
            },{
                path: 'betting',
                name: 'betting',
                component: betting,
                children: [
                    {
                        path: 'bettingHome',
                        name: 'bettingHome',
                        component: bettingHome
                    },{
                        path: 'hurchasingHall',
                        name: 'hurchasingHall',
                        component: hurchasingHall
                    },{
                        path: 'drawNotice',
                        name: 'drawNotice',
                        component: drawNotice
                    },{
                        path: 'personalCenter',
                        name: 'personalCenter',
                        component: personalCenter
                    },
                ]
            },{
                path: 'service',
                name: 'service',
                component: service
            },{
                path: 'lottery',
                name: 'lottery',
                component: lottery
            },{
                path: 'canon',
                name: 'canon',
                component: canon
            },{
                path: 'broadcast',
                name: 'broadcast',
                component: broadcast
            },
        ]
    },{
      path: '/signIn',
      name: 'signIn',
      component: signIn
    },
  ]
})
