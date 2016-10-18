import React from 'react';

import books from "../../data/book-list";

import BooklistPanel from "../views/booklist-panel";

// import BooklistForm from "../views/booklist-form";

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
    this._fetchBooklist();
  } 

  render() {
    const booklist = this._getBooklist();

    return (
      <div className="panelContainer">
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

  _removeBook(bookId) {
    // dataService.deleteBook(bookId);
  }

  _addBook(title, author, description, imageUrl) {
    console.log('imageUrl', imageUrl);

    // dataService.addBook(title, author, description, imageUrl);
  }
}

export default BooksContainer;
