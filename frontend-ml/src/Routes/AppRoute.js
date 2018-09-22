import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

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
