import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ApplicationRoutes from './Routes/Routes';
import AppRoute from './Routes/AppRoute';
import { Provider } from 'react-redux';
import store from './store/Configure';
import registerServiceWorker from './registerServiceWorker';

const {App} = ApplicationRoutes;
const {Routes} = ApplicationRoutes;

const MercadoLibreFrontend = () => {

  return(
  <div>
    <Provider store={store}>
      <Router>
        <App>
          <Switch>
          {Routes.map(route =>
            <AppRoute
              exact={route.exact}
              path={route.path}
              component={route.component}
              isPrivate={route.private}
              key={route.path}
              />
           )}
           </Switch>
         </App>
       </Router>
    </Provider>
  </div>
  );
};

ReactDOM.render(<MercadoLibreFrontend />, document.getElementById('root'));
registerServiceWorker();
