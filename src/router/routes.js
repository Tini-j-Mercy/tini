
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/tini',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      
      { path: 'Home', component: () => import('pages/IndexPage.vue') },
      { path: 'ProfileDetailPath', component: () => import('src/pages/ProfileDetailPath.vue') },
      { path: 'EducationPath', component: () => import('src/pages/EducationPath.vue') },
      { path: 'InterestPath', component: () => import('src/pages/InterestPath.vue') }
    ]
  }
    ]


export default routes
