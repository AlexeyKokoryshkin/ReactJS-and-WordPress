import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDom from 'react-dom';
import './components/styles/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/layouts/Layout';
import MainPage from './components/pages/Main';

import AboutUs from './components/pages/AboutUs';
import ToUser from './components/pages/ToUser';
import ToLibrarian from './components/pages/ToLibrarian';
import ToDistributor from './components/pages/ToDistributor';
import Faq from './components/pages/Faq';
import DownloadApp from './components/pages/DownloadApp';

import PageNotFound from './components/pages/PageNotFound';

const BLOG_API = `http://localhost/test-digital/`;

//  страница новостей
class BlogPage extends React.Component {
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
      if (!this.state.post) return <div>Загрузка...</div>
      return <div>
        <h3>{this.state.post.title.rendered}</h3>
        <div dangerouslySetInnerHTML={{ __html : this.state.post.content.rendered }}></div>
      </div>
    }
  }

ReactDom.render(<Router history={browserHistory}>
    <Route path="/test-digital" component={Layout}>
        <IndexRoute component={MainPage}/>
        <Route path="/test-digital/aboutUs" component={AboutUs}/>
        <Route path="/test-digital/toUser" component={ToUser}/>
        <Route path="/test-digital/toLibrarian" component={ToLibrarian}/>
        <Route path="/test-digital/toDistributor" component={ToDistributor}/>
        <Route path="/test-digital/faq" component={Faq}/>
        <Route path="/test-digital/downloadApp" component={DownloadApp}/>
        <Route path="/test-digital/:id" component={BlogPage} />
        <Route path="*" component={PageNotFound}/>
    </Route>
</Router>, document.querySelector('#root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
