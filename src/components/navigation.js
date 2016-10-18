import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
  return (
    <navigation className="l-navigation navigation">
      <h1 className="logo"><Link to="/">Artemis</Link></h1>
      <nav className="l-navlinks navlinks">
        <ul>
          <li className="navlinks__item"><Link to="/">Home</Link></li>
          <li className="navlinks__item"><Link to="/books">Books</Link></li>
          <li className="navlinks__item"><Link to="/authors">Authors</Link></li>
          <li className="navlinks__item"><Link to="/clubs">Clubs</Link></li>
        </ul>
      </nav>
      <nav className="navActions">
        <ul>
          <li className="navActions__item navActions__item__search visble">
            <Link className="js-buttonSearchOpen fa-search" to="/search">Search</Link>
          </li>
          <li className="navActions__item menu">
            <a className="js-actionMenu fa-bars">Menu</a>
          </li>
        </ul>
      </nav>
    </navigation>
  )
}

export default Navigation;
