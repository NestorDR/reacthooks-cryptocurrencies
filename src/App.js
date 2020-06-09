import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Provider permite vincular la App con el provider redux
import {Provider} from 'react-redux';
import * as PropTypes from 'prop-types';

import Home from './pages/Home';
import List from './pages/List';
import Detail from './pages/Detail';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/detail/:id" component={Detail} />
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
