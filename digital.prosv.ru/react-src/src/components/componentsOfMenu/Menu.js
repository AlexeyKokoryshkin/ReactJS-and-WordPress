import React, { Component } from 'react';

class Menu extends Component {
    state = {
        showModal: false
       }
     
       handleModal = () => {
         this.setState({showModal: !this.state.showModal});
       }

    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <ul className="nav nav-tabs">
                            { this.props.children }
                        </ul>

                   
                        { this.state.showModal && <MyModal handleModal={this.handleModal}/> }
                        <button onClick={this.handleModal}> Скачать приложение </button>
                


                {/* <div className="btn-group submenu-group-block">
 					<a className="btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
 						<div className="mx-auto  menu-button-download">Скачать приложение</div>
 					</a>
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
 				</div> */}

                    </div>
                </div>
            </nav>  
        )
    }
}

export default Menu

class MyModal extends Component {
    render () {
        return (
            <div className="dropdown">
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
        )
    }
}
