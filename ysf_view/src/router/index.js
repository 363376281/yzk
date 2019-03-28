import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First'
import Zhuanlan from '@/components/Zhuanlan'
import Shucheng from '@/components/Shucheng'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
       path: '/First', 	
    	component: First
    	
    	
    },
    {
    	
    	  path: '/Zhuanlan', 	
    	component: Zhuanlan
    	
    	
    },
    {
     path: '/Shucheng', 	
    	component: Shucheng
 
    }
  ]
})
