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
          name: 'Profile',
          path: '',
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
          name: 'GWNU QA',
          path: '/Work/GwnuQa',
          component: () => import('@/views/pages/Work/GwnuQa'),
        },
        {
          name: 'REB',
          path: '/Work/RebHrd',
          component: () => import('@/views/pages/Work/RebHrd'),
        },
        {
          name: 'MERS Modeling',
          path: '/Personal/MersModeling',
          component: () => import('@/views/pages/Personal/MersModeling'),
        },
        {
          name: 'Game Modeling',
          path: '/Personal/GameModeling',
          component: () => import('@/views/pages/Personal/GameModeling'),
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
