import React, { Component } from 'react';
import { Link } from 'react-router';

const BLOG_API = `http://localhost/test-digital/`;

class AllNews extends Component {
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
            posts: posts // обновляем состояние страницы
          })
        })
      }

      render() {
        return (
          <>
              <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/test-digital" className="b-navbar__home">{ this.props.brand || 'Главная' }</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Все новости</li>
                    </ol>
                </nav>
            </div>
              {
                this.state.posts.map(item => (
                  <div className="all-news-container" key={item.id}>
                    <Link className="row mx-auto all-news-preview" to={`/test-digital/${item.id}`}>
                        <div className="col-xl-4 px-0 all-news-preview-image">
                            <img src={item.img} alt=""/>
                        </div>
                          <div className="col-xl-8">
                            <h3 className="all-news-preview-title">{item.title}</h3>
                          <div className="all-news-preview-text">{item.description}</div>
                          <div className="all-news-preview-date">{item.date}</div>
                          </div>
                    </Link>                    
                  </div>
                ))
              }
          </>
        )
      }
    }

export default AllNews