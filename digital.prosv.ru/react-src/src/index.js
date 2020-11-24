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

import PageNotFound from './components/pages/PageNotFound';
import PostPage from './components/componentsOfNews/PostPage';

import Buying from './components/pages/Buying';
import BuyingUr from './components/pages/BuyingUr';

import AllNews from './components/pages/AllNews';


ReactDom.render(<Router history={browserHistory}>
    <Route path="/test-digital" component={Layout}>
        <IndexRoute component={MainPage}/>
        <Route path="/test-digital/aboutUs" component={AboutUs}/>
        <Route path="/test-digital/toUser" component={ToUser}/>
        <Route path="/test-digital/toLibrarian" component={ToLibrarian}/>
        <Route path="/test-digital/toDistributor" component={ToDistributor}/>
        <Route path="/test-digital/faq" component={Faq}/>
        <Route path="/test-digital/buying" component={Buying} />
        <Route path="/test-digital/buying-ur" component={BuyingUr} />
        <Route path="/test-digital/allnews" component={AllNews} />
        
        <Route path="/test-digital/:id" component={PostPage} />
        <Route path="*" component={PageNotFound}/>
    </Route>
</Router>, document.querySelector('#root'));
