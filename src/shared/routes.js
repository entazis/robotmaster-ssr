import React from 'react';
import { Redirect } from 'react-router';

import Home from '../client/home/home';
import About from '../client/about/about';
import NotFound from '../client/not-found';
import Test from '../client/test-page';

import loadData from './loadData';

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
    loadData: () => {}
  },
  {
    path: '/:lang/v7-trial',
    exact: true,
    component: Test,
    loadData: () => {}
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
    loadData: () => {}
  },
  {
    path: '/:lang/applications',
    exact: true,
    component: Test,
    loadData: () => {}
  },
  {
    path: '/:lang/newsroom',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    path: '/:lang/newsroom/:postId',
    exact: true,
    component: Test,
    loadData: (postId, lang) => loadData('post', postId, lang)
  },
  {
    path: '/:lang/contact',
    exact: true,
    component: Test,
    loadData: () => {}
  },
  {
    path: '/:lang/disclaimer',
    exact: true,
    component: Test,
    loadData: () => {}
  },
  {
    path: '/:lang/eula',
    exact: true,
    component: Test,
    loadData: () => {}
  },
  {
    path: '/:lang/gdpr',
    exact: true,
    component: Test,
    loadData: () => {}
  },
  {
    path: '/:lang/partners',
    exact: true,
    component: Test,
    loadData: () => {}
  },
  {
    path: '/:lang/privacy',
    exact: true,
    component: Test,
    loadData: () => {}
  },
  {
    path: '/:lang/products',
    exact: true,
    component: Test,
    loadData: () => {}
  },
  {
    path: '/:lang/whats-new',
    exact: true,
    component: Test,
    loadData: () => {}
  },
  {
    path: '/:lang/success-stories',
    exact: true,
    component: Test,
    loadData: () => {}
  },
  {
    path: '/:lang/why-robotmaster',
    exact: true,
    component: Test,
    loadData: () => {}
  },
  {
    component: NotFound
  }
];

export default Routes;