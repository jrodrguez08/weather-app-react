import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import routes from 'components/routes/routes'

import Login from 'components/Login';

const Router = () => (
	<BrowserRouter>
		<Route path={routes.home} render={() => <Login/>} />
  </BrowserRouter>
);

export default Router;
