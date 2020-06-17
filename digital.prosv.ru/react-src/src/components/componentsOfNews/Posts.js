import React, { Component } from 'react';
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
            posts: posts.slice(1) // обновляем состояние страницы
          })
        })
      }

      render() {
        return (
          <>
              {
                this.state.posts.map(item => (
                  <div className="col-lg-6 news-preview-container" key={item.id}>
                    <Link className="news-preview" to={`/test-digital/${item.id}`}>
                        <div className="news-preview-content">
                          <img className="news-preview-img" src={item.img} alt=""/>
                          <h3 className="news-preview-title">{item.title}</h3>
                          <div className="news-preview-text">{item.description}</div>
                          <div className="news-preview-date">{item.date}</div>
                        </div>
                    </Link>                    
                  </div>
                ))
              }
          </>
        )
      }
    }

export default Posts