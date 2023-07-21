import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Danang from '../views/Danang.vue'
import HaiPhong from '../views/HaiPhong.vue'
import Binhthuan from '../views/Binhthuan.vue'
import Langson from '../views/Langson.vue';
import Hue from '../views/Hue.vue';
import HCM from '../views/HCM.vue';
import MyBooking from '../views/MyBooking.vue';
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/danang',
      name: 'danang',
      component: Danang
    },

    {
      path: '/haiphong',
      name: 'haiphong',
      component: HaiPhong
    },
    {
      path: '/mybooking',
      name: 'MyBooking',
      component: MyBooking
    },

    {
      path: '/binhthuan',
      name: 'binhthuan',
      component: Binhthuan
    },
    {
      path: '/langson',
      name: 'langson',
      component: Langson
    },

    {
      path: '/hue',
      name: 'hue',
      component: Hue
    },

    {
      path: '/hcm',
      name: 'hcm',
      component: HCM
    }



  ]
})
router.beforeEach((to, from, next) =>{
  window.scrollTo(0, 0);
  next();
})
export default router
