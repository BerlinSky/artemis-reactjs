import React from 'react';
import _ from 'lodash';
import base from '../../base';

import books from "../../data/book-list";

import BooklistPanel from "../views/booklist-panel";
import BooklistForm from "../views/booklist-form";

class BooksContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      booklist: []
    };

    this._removeBook = this._removeBook.bind(this);
    this._addBook = this._addBook.bind(this);
  }

  componentWillMount() {    
    this.ref = base.syncState(`books`, {
      context: this,
      state: 'booklist'
    });
  } 

  componentDidMount() {   
    // one-time loading from the local data file: 
    // this._fetchBooklist();
  }

  render() {
    const booklist = this._getBooklist();

    return (
      <div className="panelContainer">
        <BooklistForm addBook={this._addBook} />
      
        { booklist }
      </div>
    )
  }

  _getBooklist() {
  	const booklist = this.state.booklist;
	  return (
	  	Object
	  		.keys(booklist)
	  		.map(key => <BooklistPanel key={key} book={booklist[key]} onRemove={this._removeBook} />)
			);
  }

  _fetchBooklist() {
    this.setState({
    	booklist: books
    })
  }

  _removeBook(book) {
    const booklist = {...this.state.booklist};
    const isbn = book.isbn;
    const newBooklist = _.filter(booklist, book => book.isbn !== isbn);

    this.setState({
      booklist: newBooklist
    })
  }

  _addBook(book) {
    const booklist = {...this.state.booklist};
    const timestamp = Date.now();
    book.isbn = timestamp;
    booklist[`book-${timestamp}`] = book;
    this.setState({
      booklist
    })
  }
}

export default BooksContainer;
