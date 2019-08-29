import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'/Welcome',// 直接跳转欢迎页
      component: ()=>import('@/components/HelloWorld')
    },
     {
      path:'/Welcome',
      name:'Welcome', // 欢迎页
      component:()=>import('@/views/Welcome')
    },
    {
      path:'/LoginHome',
      name:'LoginHome',//登录与注册
      component:()=>import('@/views/LoginHome'),
      children:[
        {
          path:'/Login',
          name:'Login',// 登录
          component:()=>import('@/views/Login')
        },
        {
          path:'/Register',
          name:'Register',// 注册
          component:()=>import('@/views/Register')
        },
      ]
    },
    {
      path:'/Home',
      name:'Home',  
      redirect:'/Lovetime',// 直接跳转时光机                    // 主页
     component:()=>import('@/views/Home'),
     children:[
      {
        path:'/Mytest',
        name:'Mytest',        // 我的
        component:()=>import('@/views/Mytest'),
      },
      {
        path:'/Silkbag',
        name:'SilKbag', // 锦囊
        component:()=>import('@/views/Silkbag')
      },
      {
        path:'/Life',
        name:'Life', // 生活
        component:()=>import('@/views/Life')
      },
      {
        path:'/Lovetime',
        name:'Lovetime', // 时光记
        component:()=>import('@/views/Lovetime')
      },
      {
        path:'/Message',
        name:'Message', // 消息
        component:()=>import('@/views/Message')
      },
     ]
    },
    {
      path:'/Album',
      name:'Album',// 制作相册
      component:()=>import('@/views/Album')
    },
    {
      path:'/Vipcores',
      name:'Vipcores',// 会员中心
      component:()=>import('@/views/Vipcores')
    },
    {
      path:'/Collection',
      name:'Collection',  //  我的收藏
      component:()=>import('@/views/Collection')
    },
    {
      path:'/Cart',
      name:'Cart',    // 购物车
      component:()=>import('@/views/Cart')
    },
    {
      path:'/Myorder',
      name:'Myorder', // 我的订单
      component:()=>import('@/views/Myorder')
    },
    {
      path:'/Coupon',
      name:'Coupon', // 优惠卷
      component:()=>import('@/views/Coupon')
    },
    {
      path:'/Setting',
      name:"Setting", //设置中心
      component:()=>import("@/views/Setting")
    },
    {
      path:'/Address',
      name:"Address", //收货地址
      component:()=>import("@/views/Address")
    },
    {
      path:'/Edit',
      name:'Edit',///地址设置
      component:()=>import("@/views/Edit")
    }
    
  ]
})
