import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

class Router extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Match exactly pattern="/" component={StorePicker} />
					<Match pattern="/store/:storeId" component={App} />
					<Miss component={NotFound} />
				</div>
			</BrowserRouter>
		)
	}
} 

export default Router;

