import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import NotFound from './components/NotFound';

import MainLayout from './components/layouts/main-layout';

const Router = () => (
	<BrowserRouter>
		<div>
			<Match pattern="/" component={MainLayout} />
			<Miss component={NotFound} />
		</div>
	</BrowserRouter>
)

export default Router;


