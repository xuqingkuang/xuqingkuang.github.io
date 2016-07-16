/* React */
import React from 'react';

/* React Router */
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

/* Router dependencies preparing */
import { store, history } from './prepare.js'

/* App configs */
import config from './config';

/* Components */
import { Layout, NotFound } from './components';
import { BlogList, BlogItem, BlogEditor } from './components/blogs';
import Resume from './components/resume';
import About from './components/about';

/* Routes */
const Routes = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path={config.urlPrefix} component={Layout}>
          <IndexRoute component={BlogList} />
          <Route path='blogs/:slug' component={BlogItem} />
          <Route path='blogs/edit/:slug' component={BlogEditor} />
          <Route path="about" component={About} />
        </Route>
        <Route path="me" component={Resume} />
        <Route path="*" component={NotFound} />
      </Router>
    </Provider>
  );
}

export default Routes;
