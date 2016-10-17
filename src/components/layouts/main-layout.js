import React from 'react';
import Match from 'react-router/Match'
import Link from 'react-router/Link'

import BooksLayout from './books-layout';
import SearchLayout from './search-layout';
import AuthorsLayout from './authors-layout';
import ClubsLayout from './clubs-layout';

const MainLayout = () => {
	return (
		<div>
			<h1>
				MainLayout
			</h1>
			
			<ul>
		    <li><Link to="/">Home</Link></li>
		    <li><Link to="/books">Books</Link></li>
		    <li><Link to="/search">Search</Link></li>
		    <li><Link to="/authors">Authors</Link></li>
		    <li><Link to="/clubs">Clubs</Link></li>
		  </ul>

		  <Match exactly pattern="/" component={BooksLayout}/>
		  <Match pattern="/books" component={BooksLayout}/>
		  <Match pattern="/search" component={SearchLayout}/>
		  <Match pattern="/authors" component={AuthorsLayout} />
			<Match pattern="/clubs" component={ClubsLayout} />
		</div>
	)
}

export default MainLayout;