import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Danang from '../views/Danang.vue'
import HaiPhong from '../views/HaiPhong.vue'
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
    }
  ]
})

export default router
