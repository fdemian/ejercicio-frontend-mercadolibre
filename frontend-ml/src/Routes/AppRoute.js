import React from 'react'
import { Route } from 'react-router-dom';

const AppRoute = ({exact, path, component, key}) => {
 return (
  <Route
    exact={exact}
    path={path}
    component={component}
    key={key}
  />
  );
}

export default AppRoute;
