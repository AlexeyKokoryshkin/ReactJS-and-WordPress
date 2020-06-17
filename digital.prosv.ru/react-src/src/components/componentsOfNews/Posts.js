/* import React, { Component } from 'react';
const BLOG_API = `http://localhost/test-digital/`;
let pathToAPI = BLOG_API + '/wp-json/api/auth';

class Posts extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      posts: []
    };
      
  }

  componentWillMount () {
    return fetch(pathToAPI, {
        method: 'POST',
        body: JSON.stringify(posts),
        headers: {
            'content-type': 'application/json'
        }
        }).then((response) => {
            return response.json();
        }).then((posts) => {
          this.setState({
            posts: posts, 
          })
        })
    }

  render() {
    return (
      <>
        <ul> 
              {
                this.state.posts.map(item => (
                  <li key={item.id}>
                    <Link to={`/test-digital/${item.id}`}>
                        <p>{item.title.rendered}</p>
                        <div dangerouslySetInnerHTML={{ __html : item.excerpt.rendered }}></div>
                        <p>{item.date}</p>
                    </Link>                    
                  </li>
                ))
              }
            </ul>
      </>
    )
  }
}

export default Posts */




import React, { Component } from 'react';
//import Img from './Img';
import { Link } from 'react-router';
const BLOG_API = `http://localhost/test-digital/`;

class Posts extends Component {
    constructor(props) {
        super(props)

        this.state = { // инициализируем состояние по-умолчанию
          posts: []
        };
 
      }

      componentWillMount () {
        return fetch(BLOG_API + '/wp-json/api/posts/' ) // делаем запрос к Wordpress API и получаем только первые четыре записи
        .then((response) => response.json()) // получаем ответ в формате json
        .then(posts => {
          this.setState({
            posts: posts, // обновляем состояние страницы
          })
        })
      }

      render() {
        return (
          <div>
            <ul> 
              {
                this.state.posts.map(item => (
                  <li key={item.id}>
                    <Link to={`/test-digital/${item.id}`}>
                        <img src={item.img} alt=""/>
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                    </Link>                    
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }
    }

export default Posts



