import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Me from '../pages/Me';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Me} />
  </Switch>
);

export default Routes;
