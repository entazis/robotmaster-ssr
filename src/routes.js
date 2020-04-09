import NotFound from './client/not-found';
import Test from './client/test-page';

import loadData from './helpers/loadData';

const Routes = [
  {
    path: '/:language',
    exact: true,
    component: Test,
    loadData: () => loadData('posts')
  },
  {
    component: NotFound
  }
];

export default Routes;