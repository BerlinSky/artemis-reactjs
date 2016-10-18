import React from 'react';

export default class BooklistPanel extends React.Component {
  constructor() {
    super();

    this._handleRemove = this._handleRemove.bind(this);
  }

  render() {
    const book = this.props.book;

    let removeButton = '';
    if(this.props.onRemove) {
      removeButton = <a className="media__button" onClick={ this._handleRemove }>remove book</a>
    }

    return (
     <div className="media">
       <img className="media__figure image" src={ book.imageUrl } alt={book.title} />
       <div className="media__body">
         <h3 className="media__title">{ book.title }</h3>
         <div className="media__subtitle">by { book.author }</div>
         <p className="media__description">
           { book.description }
         </p>
         <div className="buttonPanel">
          { removeButton }
         </div>
       </div>
     </div>
    )
  }

  _handleRemove(e) {
    e.preventDefault();
    this.props.onRemove(this.props.id);
  }

}
