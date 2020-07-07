import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pa from "@/components/pa"
import Xl from "@/components/xl"
import Fw from "@/components/fw"
import Jj from "@/components/jj"
import Xx from "@/components/xx"
import Dy from "@/components/dy"
import Zt from "@/components/zt"
import Qw from "@/components/qw"
import Dp from "@/components/dp"
import Ss from "@/components/ss"
import Sn from "@/components/sn"
import Zp from "@/components/zp"
import Lg from "@/components/lg"
import Np from "@/components/np"
import Sb from "@/components/sb"
import Pd from "@/components/pd"
import Sp from "@/components/sp"
import Qt from "@/components/qt"
import Sh from "@/components/sh"
import Nbxq from "@/components/nbxq"
import Zs from "@/components/zs"
import Fb from "@/components/fb"
import Xw from "@/components/xw"
import Jm from "@/components/jm"
import Gf from "@/components/gf"
import Hy from "@/components/hy"
import Zc from "@/components/zc"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {path:'/pa',component:Pa,
    children:[
    {path:'/pa/jj',component:Jj},
     {path:'/pa/xx',component:Xx},
      {path:'/pa/dy',component:Dy},
        {path:'/pa/zt',component:Zt},
        {path:'/pa/qw',component:Qw},
          {path:'/pa/dp',component:Dp},
         {path:'/',	redirect:'/pa/jj' }
    ]
    },
    {path:'/xl',component:Xl},
    {path:'/ss',component:Ss,
    children:[
     {path:'/ss/sn',component:Sn},
     {path:'/ss/zp',component:Zp},
     {path:'/ss/lg',component:Lg},
     {path:'/ss/np',component:Np},
     {path:'/ss/sb',component:Sb},
     {path:'/ss/pd',component:Pd},
     {path:'/ss/sp',component:Sp},
     {path:'/ss/qt',component:Qt},
         {path:'/ss/nbxq',component:Nbxq},
        {path:'/',	redirect:'/ss/sn' }
     
    ]
    },
    {path:'/fw',component:Fw,
    children:[   
       {path:'/fw/sh',component:Sh},
       {path:'/fw/zs',component:Zs},
       {path:'/fw/fb',component:Fb},
       {path:'/',	redirect:'/fw/sh' }
    ]
   },
   {path:'/xw',component:Xw},
   {path:'/jm',component:Jm},
   {path:'/gf',component:Gf},
   {path:'/hy',component:Hy},
   {path:'/zc',component:Zc}
  ]
})
