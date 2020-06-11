import React, { Component } from 'react';
import { Link } from 'react-router';

class DownloadApp extends Component {
    render () {
        return (
            <>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/test-digital" className="b-navbar__home">{ this.props.brand || 'Главная' }</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Скачать приложение</li>
                    </ol>
                </nav>
            </div>
            <div className="dropdown-menu dropdown-menu-right submenu-items-block" aria-labelledby="dropdownMenuLink">
                <div className="submenu-item-title">Windows</div>
                <a className="dropdown-item" href="http://catalog.prosv.ru/apps/win/last/" target="_blank" rel="noopener noreferrer">Версия под  Windows 7 (универсальная)</a>
                <a className="dropdown-item" href="https://www.microsoft.com/ru-ru/store/p/%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D0%B8%D0%BA%D0%B8-%D0%9F%D1%80%D0%BE%D1%81%D0%B2%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D0%B5/9nblggh51nx6/" target="_blank" rel="noopener noreferrer">Версия под Windows 8.1 и выше</a>
                <div className="dropdown-divider"></div>
                <div className="submenu-item-title">Android-планшеты и телефоны</div>
                <a className="dropdown-item" href="https://play.google.com/store/apps/details?id=com.prosv.ebook" target="_blank" rel="noopener noreferrer">Версия под Android 4.4 и выше</a>
                <div className="dropdown-divider"></div>
                <div className="submenu-item-title">IPad</div>
                <a className="dropdown-item" href="https://apps.apple.com/ru/app/%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D0%B8%D0%BA%D0%B8-%D0%BF%D1%80%D0%BE%D1%81%D0%B2%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D1%8F/id1435470880/" target="_blank" rel="noopener noreferrer">Версия под iOS 9 и выше</a>
            </div>
            </>
        )
    }
}

export default DownloadApp