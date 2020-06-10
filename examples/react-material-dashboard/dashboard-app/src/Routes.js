import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout} from './layouts';

import {
  Dashboard as DashboardView,
  OrderList as OrderListView,
  UserView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={OrderListView}
        exact
        layout={MainLayout}
        path="/orders"
      />
      <RouteWithLayout
        component={UserView}
        exact
        layout={MainLayout}
        path="/user/:id"
      />
      <Redirect to="/dashboard" />
    </Switch>
  );
};

export default Routes;
