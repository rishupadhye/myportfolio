import Vue from 'vue'
import Router from 'vue-router'

import Education from './views/Education'
import About from './views/About'
import Home from './views/Home'
import Projects from './views/Projects'
import Blogs from './views/Blogs'
import Login from './views/Login'
import AddNewBlog from './views/AddNewBlog'
import firebase from 'firebase'
import EditEducation from '@/edit/EditEducation'
import EditProjects from '@/edit/EditProjects'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/education',
      name: 'education',
      component: Education
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blogs
    },
    {
      path:'/editeducation',
      name:'editeducation',
      component: EditEducation
    },
    {
      path:'/editprojects',
      name:'editprojects',
      component: EditProjects
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: Login,
    //   meta:{
    //     requiresGuest:true
    //   }
    // },
    {
      path: '/addnewblog',
      name:'addnewblog',
      component: AddNewBlog,
      // meta:{
      //   requiresAuth: true
      // }
    }
    
    
    
  

  ]
});

// // Nav Guard
// router.beforeEach((to, from, next) => {
//   // Check for requiresAuth guard
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // Check if NO logged user
//     if (!firebase.auth().currentuser) {
//       // Go to login
//       next({
//         path: '/login',
//         query: {
//           redirect: to.fullPath
//         }
//       });
//     } else {
//       // Proceed to route
//       next();
//     }
//   } else if (to.matched.some(record => record.meta.requiresGuest)) {
//     // Check if NO logged user
//     if (firebase.auth().currentuser) {
//       // Go to login
//       next({
//         path: '/',
//         query: {
//           redirect: to.fullPath
//         }
//       });
//     } else {
//       // Proceed to route
//       next();
//     }
//   } else {
//     // Proceed to route
//     next();
//   }
// });
 
export default router;