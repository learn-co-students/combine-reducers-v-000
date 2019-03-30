import React, { Component } from 'react'
import { addAuthor } from '../actions'
import uuid from 'uuid' // handles unique ID generation
import { connect } from 'react-redux'

export class AuthorInput extends Component {

  state = {
    authorName: ''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleOnSubmit = event => {
    event.preventDefault()
    if (
          !this.state.authorName
        ) {
            alert('author name is required!')
          }
    else {
            const author = {...this.state, id: uuid() }
            this.props.addAuthor(author)
            this.setState({
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
            name="authorName"
            value={this.state.authorName}
            placeholder="author name" />
        </p>
        <input type="submit" />
      </form>
    )
  }
}

export default connect(null, { addAuthor })(AuthorInput)
