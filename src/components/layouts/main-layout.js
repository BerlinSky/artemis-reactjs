import React from 'react';
import Match from 'react-router/Match'

import Navigation from '../navigation';
import AppFooter from '../footer';

import BooksLayout from './books-layout';
import SearchLayout from './search-layout';
import AuthorsLayout from './authors-layout';
import ClubsLayout from './clubs-layout';

const MainLayout = () => {
	return (
    <div className="l-siteContainer l-header-fixed l-footer-fixed siteContainer">

			<Navigation />

		  <Match exactly pattern="/" component={BooksLayout}/>
		  <Match pattern="/books" component={BooksLayout}/>
		  <Match pattern="/search" component={SearchLayout}/>
		  <Match pattern="/authors" component={AuthorsLayout} />
			<Match pattern="/clubs" component={ClubsLayout} />

			<section className="searchContainer js-searchContainer">
			  <form className="searchForm">
			    <input className="searchForm__input" type="search" placeholder="Search..."/>
			    <button className="searchForm__submit js-buttonSearchSubmit" type="submit">Search</button>
			  </form>
			  <div className="searchContent">

			  </div>
			  <span className="searchClose js-buttonSearchClose"></span>
			</section>

			<AppFooter />

		</div>
	)
}

export default MainLayout;