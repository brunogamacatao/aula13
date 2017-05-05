import React from 'react';

import App from './App';
import Single from './Single';
import Photogrid from './Photogrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from '../store';

class Main extends React.Component {
  render() {
    // Configuração do roteamento
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Photogrid}></IndexRoute>
            <Route path="/view/:postId" component={Single}></Route>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Main;
