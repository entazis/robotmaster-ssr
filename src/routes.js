import React from 'react';
import { Redirect } from 'react-router';

import Home from './client/home/home';
import About from './client/about/about';
import NotFound from './client/not-found';
import Test from './client/test-page';

import loadData from './helpers/loadData';

const Routes = [
  {
    path: '/',
    exact: true,
    component: () => {return <Redirect to="/en"/>}
  },
  {
    path: '/:lang',
    exact: true,
    component: Home,
    loadData: () => loadData('posts')
  },
  {
    path: '/:lang/v6-trial',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/:lang/v7-trial',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/:lang/about',
    exact: true,
    component: About,
    loadData: () => loadData('posts')
  },
  {
    path: '/:lang/events',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/:lang/applications',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/:lang/newsroom',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/:lang/contact',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/:lang/disclaimer',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/:lang/eula',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/:lang/gdpr',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/:lang/partners',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/:lang/privacy',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/:lang/products',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/:lang/whats-new',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/:lang/success-stories',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/:lang/why-robotmaster',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    component: NotFound
  }
];

export default Routes;