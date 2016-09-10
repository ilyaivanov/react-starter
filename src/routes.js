import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import ArtistsSearch from './components/ArtistsSearch/ArtistsSearchPage.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="search" component={ArtistsSearch}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
