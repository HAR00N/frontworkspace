import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        {
          name: 'Home',
          path: '',
          component: () => import('@/views/pages/main/MainPage'),
        },
        {
          name: 'Stack',
          path: '/Profile/Profile',
          component: () => import('@/views/pages/profile/UserProfile'),
        },
        {
          name: 'Dashboard',
          path: '/Dashboard',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        {
          name: 'User Stack',
          path: '/Profile/Stack',
          component: () => import('@/views/pages/profile/UserStack'),
        },
        {
          name: 'User Timeline',
          path: '/Profile/Timeline',
          component: () => import('@/views/pages/profile/UserTimeline'),
        },
        {
          name: 'OpenApi',
          path: '/Work/OpenApi',
          component: () => import('@/views/pages/Work/OpenApi'),
        },
        {
          name: 'TableSearch',
          path: '/Work/TableSearch',
          component: () => import('@/views/pages/Work/TableSearch'),
        },
        {
          name: 'MERS Modeling',
          path: '/Personal/MersModeling',
          component: () => import('@/views/pages/personal/MersModeling'),
        },
        {
          name: 'Game Modeling',
          path: '/Personal/GameModeling',
          component: () => import('@/views/pages/personal/GameModeling'),
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        },
        {
          name: 'Icons',
          path: 'components/icons',
          component: () => import('@/views/dashboard/component/Icons'),
        },
        {
          name: 'Typography',
          path: 'components/typography',
          component: () => import('@/views/dashboard/component/Typography'),
        },
        // Tables
        {
          name: 'Regular Tables',
          path: 'tables/regular-tables',
          component: () => import('@/views/dashboard/tables/RegularTables'),
        },
        // Maps
        {
          name: 'Google Maps',
          path: 'maps/google-maps',
          component: () => import('@/views/dashboard/maps/GoogleMaps'),
        },
      ],
    },
  ],
})
