import React from 'react';
import Match from 'react-router/Match'

import BooksContainer from '../containers/books-container';

const BooksLayout = (props) => {
	return (
		<div className="l-siteContainer l-header-fixed l-footer-fixed siteContainer">
        <section className="l-mainContent mainContent">
          <div className="siteAttraction-x milkwayContainer">
            <div className="siteCover">
              <h1 className="siteCover__caption">Bustling Daily Life in Reading</h1>
            </div>
            <span></span>
				    <span></span>
				    <span></span>
				    <span></span>
				    <span></span>
				    <span></span>
          </div>

				  <Match pattern="/books" component={BooksContainer} />
         
        </section>
      </div>
	)
}

export default BooksLayout;