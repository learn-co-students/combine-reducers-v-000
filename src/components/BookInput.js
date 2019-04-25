import React, { Component } from 'react';
import { addBook } from '../actions';
import uuid from 'uuid';
import { connect } from 'react-redux';

export class BookInput extends Component {

  state = {
    title: '',
    authorName: ''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleOnSubmit = event => {
    event.preventDefault();
    const book = {...this.state, id: uuid() };
    // Here's where the new book object is added to the store
    // connect will automatically wrap addBook in a call to
    // dispatch, so that we end up with dispatch(addBook(book))
    this.props.addBook(book);
    this.setState({
      title: '',
      authorName: ''
    });
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="title"
            value={this.state.title}
            placeholder="book title" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnChange(event)}
            name="authorName"
            value={this.state.authorName}
            placeholder="author name" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};

// addBook is in props, so here we're using destructuring
// to pass it into connect
export default connect(null, { addBook })(BookInput);
