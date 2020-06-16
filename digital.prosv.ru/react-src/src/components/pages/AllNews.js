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
        return fetch(BLOG_API + '/wp-json/wp/v2/posts') // делаем запрос к Wordpress API
        .then((response) => response.json()) // получаем ответ в формате json
        .then(posts => {
          this.setState({
            posts: posts, // обновляем состояние страницы
          });
        })
      }
      render() {
        return (
          <>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/test-digital" className="b-navbar__home">{ this.props.brand || 'Главная' }</Link></li>
                        <li className="breadcrumb-item"><Link to="/test-digital/aboutUs" className="b-navbar__home">{ 'Об ЭФУ' }</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Все новости</li>
                    </ol>
                </nav>
            </div>
            <div>
                <ul>
                {
                    this.state.posts.map(item => (
                    <li key={item.id}>
                        <Link to={`/test-digital/${item.id}`}>
                        {item.title.rendered}
                        </Link>
                    </li>
                    ))
                }
                </ul>
            </div>
            
          </>
        )
      }
    }

export default AllNews



{/*   <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/test-digital" className="b-navbar__home">{ this.props.brand || 'Главная' }</Link></li>
                        <li className="breadcrumb-item"><Link to="/test-digital/aboutUs" className="b-navbar__home">{ 'Об ЭФУ' }</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Все новости</li>
                    </ol>
                </nav>
            </div> */}

