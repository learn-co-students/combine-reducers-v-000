import React, { Component } from 'react';
import { connect } from 'react-redux';

class Authors extends Component {

  render() {

    let authors = this.props.authors.map(author => <li key={author.id}>{author.authorName} {  console.log(author.id)
}</li>);

    return (
      <div>
        <ul>
          {authors}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { authors: state.authors }
}

export default connect(mapStateToProps)(Authors);
