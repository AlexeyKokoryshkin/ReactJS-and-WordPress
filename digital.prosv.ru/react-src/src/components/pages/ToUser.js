import React, { Component } from 'react';
import { Link } from 'react-router';

const BLOG_API = `http://localhost/test-digital/`;

class ToUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
          post: null
        };
      }
      componentWillMount () {
        return fetch(BLOG_API + '/wp-json/wp/v2/pages/8').then((response) => response.json())
        .then(post => {
          this.setState({
            post: post,
          });
        })
      }
      render() {
        if (!this.state.post) return <div>Загрузка...</div>
        return (
          <>
             <div className="container">
               <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="/test-digital" className="b-navbar__home">{ this.props.brand || 'Главная' }</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Пользователю</li>
                  </ol>
              </nav>
             </div>
            {/* <h3>{this.state.post.title.rendered}</h3> */}
            <div dangerouslySetInnerHTML={{ __html : this.state.post.content.rendered }}></div>
          </>
        ) 
      }
    }
  

export default ToUser
