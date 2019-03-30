import React, { Component } from 'react'
import { addBook } from '../actions'
import uuid from 'uuid'
import { connect } from 'react-redux'

export class BookInput extends Component {

  state = {
    title: '',
    authorName: ''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleOnSubmit = event => {
    event.preventDefault()
    if ( !this.state.title ||
         !this.state.authorName 
        ) {
            alert('All fields are required!')
          }
    else {     
            const book = {...this.state, id: uuid() }
            this.props.addBook(book)
            this.setState({
              title: '',
              authorName: ''
            })
          }
  }

  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="title"
            value={this.state.title}
            placeholder="book title" />
        </p>
        <p>
          <input
            type="text"
            onChange={this.handleOnChange}
            name="authorName"
            value={this.state.authorName}
            placeholder="author name" />
        </p>
        <input type="submit" />
      </form>
    )
  }
}

export default connect(null, { addBook })(BookInput)
