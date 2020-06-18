import React, { Component } from 'react';
//import { Link } from 'react-router';

const BLOG_API = `http://localhost/test-digital/`;

class SidebarNews extends Component {
    constructor(props) {
        super(props)

        this.state = { 
          posts: []
        };
 
      }

      componentWillMount () {
        return fetch(BLOG_API + '/wp-json/api/posts/' ) 
        .then((response) => response.json()) 
        .then(posts => {
          this.setState({
            posts: posts.slice(1) 
          })
        })
      }

      render() {
        if (!this.state.posts) return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
            </div>
          )
        return (
          <>
              {
                this.state.posts.map(item => (
                  <div className="sidebar-news-date" key={item.id}>
                      {item.date}
                      <div className="sidebar-news-link">
                          <a  href={`/test-digital/${item.id}`}>
                            {item.description}
                          </a>  
                      </div>
                                      
                  </div>
                ))
              }
          </>
        )
      }
    }

export default SidebarNews
