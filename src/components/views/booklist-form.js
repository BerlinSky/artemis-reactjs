import React from 'react';

export default class BooklistForm extends React.Component {
  constructor() {
    super();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="formContainer">
        <form ref={ v => this._bookForm = v } onSubmit={ this._handleSubmit }>
          <div className="actionForm">
            <div className="actionForm__section">
              <div className="actionForm__panel">
                <input type="text" placeholder="Title" ref={ v => this._title = v } />
              </div>
              <div className="actionForm__panel">
                <input type="text" placeholder="Author" ref={ v => this._author = v } />
              </div>
              <div className="actionForm__panel">
                <input type="text" placeholder="Image Link" ref={ v => this._imageUrl = v }/>
              </div>
             
            </div>
            <div className="actionForm__section">
              <div className="actionForm__panel">
                <textarea cols="10" rows="5" placeholder="Description" ref={ v => this._description = v }>
                </textarea>
              </div>
            </div>
          </div>

          <div className="buttonPanel">
            <button className="actionButton" type="submit">add book</button>
          </div>
        </form>
      </div>
    )
  }

  _handleSubmit(e) {
    e.preventDefault();

    const book = {
      title: this._title.value,
      author: this._author.value,
      imageUrl: this._imageUrl.value,
      description: this._description.value
    }

console.log(book);

    this.props.addBook(book);
    this._bookForm.reset();
    // this.props.addBook(this._title.value, this._author.value, this._description.value, this._imageUrl.value);

    // this._title.value = '';
    // this._author.value = '';
    // this._imageUrl.value = '';
    // this._description.value = '';
  }

  createFish(event) {
    event.preventDefault();
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value,
    }
    this.props.addFish(fish);

    this.fishForm.reset();
  }
}
