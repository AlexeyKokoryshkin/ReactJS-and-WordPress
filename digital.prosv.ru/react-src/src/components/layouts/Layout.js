import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.brand = ''; 
    }
    
    isActive(href) {
        return window.location.pathname === href;
    }

    render () {
        return (
            <>
                <header>
                <div className="container-fluid header">
                    <div className="container-fluid header-logo"><a href="//prosv.ru/" target="blank"></a></div>
                </div>
                <Menu brand={this.brand}>
                    <MenuItem href="/test-digital/aboutUs" active={ this.isActive("/aboutUs") }>Об ЭФУ</MenuItem>
                    <MenuItem href="/test-digital/toUser" active={ this.isActive("/toUser") }>Пользователю</MenuItem>
                    <MenuItem href="/test-digital/toLibrarian" active={ this.isActive("/toLibrarian") }>Библиотекарю</MenuItem>
                    <MenuItem href="/test-digital/toDistributor" active={ this.isActive("/toDistributor") }>Дистрибьютору</MenuItem>
                    <MenuItem href="/test-digital/faq" active={ this.isActive("/faq") }>Частые вопросы</MenuItem>
                    <MenuItem href="/test-digital/downloadApp" active={ this.isActive("/downloadApp") }>Скачать приложение</MenuItem>         
                </Menu>
                </header>
                <main>
                    <div className="row">
                        <div className="col-12">
                            { this.props.children }
                        </div>
                    </div>
                </main>
                <footer className="b-footer">
                    &copy; 2020
                </footer>
            </>
        )
    }
}

export default Layout