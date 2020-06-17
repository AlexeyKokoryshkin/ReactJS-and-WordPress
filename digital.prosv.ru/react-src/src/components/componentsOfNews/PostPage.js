import React, { Component } from 'react';
import { Link } from 'react-router';

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
        <div className="content">
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/test-digital" className="b-navbar__home">{ this.props.brand || 'Главная' }</Link></li>
                        <li className="breadcrumb-item"><Link to="/test-digital/aboutUs" className="b-navbar__home">{ 'Об ЭФУ' }</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{this.state.post.title.rendered}</li>
                    </ol>
                </nav>
            </div>
            <div className="container-fluid main-title">
              <h1 className="mx-auto">{this.state.post.title.rendered}</h1>
            </div>
            <div className="container-fluid mx-auto main-content">
              <div className="row news-content">
                <div className="col-md-9">
                  <div className="news-main-container">
                    <div className="news-header">
                      <div className="news-date">Вывод даты</div>
                    </div>
                    <div className="news-text" dangerouslySetInnerHTML={{ __html : this.state.post.content.rendered }}></div>
                    </div>       
                       </div>
                  </div>
                </div>
              </div>
        </>
      )
    }
  }

export default PostPage