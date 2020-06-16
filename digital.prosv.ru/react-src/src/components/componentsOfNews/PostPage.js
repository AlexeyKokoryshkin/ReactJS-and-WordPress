import React, { Component } from 'react';

const BLOG_API = `http://localhost/test-digital/`;

class PostPage extends Component {
    constructor(props) {
      super(props)
      this.state = {
        post: null
      };
    }
    componentWillMount () {
      return fetch(BLOG_API + '/wp-json/wp/v2/posts/' + this.props.params.id).then((response) => response.json())
      .then(post => {
        this.setState({
          post: post,
        });
      })
    }
    render() {
      if (!this.state.post) return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
        </div>
      )
      return (
        <>
          <h3>{this.state.post.title.rendered}</h3>
          <div dangerouslySetInnerHTML={{ __html : this.state.post.content.rendered }}></div>
        </>
      )
    }
  }

export default PostPage