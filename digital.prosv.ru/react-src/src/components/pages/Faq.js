import React, { Component } from 'react';
import { Link } from 'react-router';

const BLOG_API = `http://localhost/test-digital/`;

class Faq extends Component {
    constructor(props) {
        super(props)
        this.state = {
          post: null
        };
      }
      componentWillMount () {
        return fetch(BLOG_API + '/wp-json/wp/v2/pages/21').then((response) => response.json())
        .then(post => {
          this.setState({
            post: post,
          });
        })
      }
      render() {
        if (!this.state.post) return (
          <div class="d-flex justify-content-center">
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
          </div>
        ) 
        return (
          <>
             <div className="container">
                 <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/test-digital" className="b-navbar__home">{ this.props.brand || 'Главная' }</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Частые вопросы</li>
                    </ol>
                </nav>
             </div>
            {/* <h3>{this.state.post.title.rendered}</h3> */}
            <div dangerouslySetInnerHTML={{ __html : this.state.post.content.rendered }}></div>
          </>
        ) 
      }
    }

export default Faq