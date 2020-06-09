import React, { Component } from 'react';
import { Link } from 'react-router';

class DownloadApp extends Component {
    render () {
        return (
            <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/test-digital" className="b-navbar__home">{ this.props.brand || 'Главная' }</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Скачать приложение</li>
                </ol>
            </nav>
                <h1>Скачать приложение</h1>
                <p>Страница скачивания приложения</p>
            </>
        )
    }
}

export default DownloadApp