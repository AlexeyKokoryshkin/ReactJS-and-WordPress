import React, { Component } from 'react';
import { Link } from 'react-router';
import News from '../componentsOfNews/News';

class AboutUs extends Component {
    render () {
        return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/test-digital" className="b-navbar__home">{ this.props.brand || 'Главная' }</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Об ЭФУ</li>
                </ol>
            </nav>
                
            <div className="content">
                <div className="container-fluid px-0 about-app-top">
                    <div className="container-fluid row">
                        <div className="col-md-6 px-0 my-auto about-app-text"><h2>Что такое электронная форма учебника?</h2><p>Электронный учебник – удобное решение для учителей и учеников, которое обеспечивает доступ к образовательному контенту в нужное время с помощью приложения для компьютеров и планшетов. Дети могут заменить тяжёлый рюкзак на компактное устройство, которое содержит все необходимые учебники.</p></div>
                        <div className="col-md-6 my-auto">
                            <img className="p-3" src="/test-digital/wp-content/themes/digital.prosv.ru/react-src/src/components/img/efu.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0 about-app-bot">
                    <div className="container-fluid about-app-title"><h2>О приложении</h2></div>
                    <div className="container-fluid px-0 mx-auto my-auto row about-app-content">
                        <div className="col-lg-3 text-center about-app-requirement">
                            <div className="container">
                                <div className="mx-auto app-requirement-icon"></div>
                                <div className="app-requirement-title"><h4>Технические требования приложения</h4></div>
                                <div className="app-requirement-text">
                                    – Windows 7 и выше<br/>
                                    – Android 4.4 и выше<br/>
                                    – iOS 9 и выше<br/>
                                    – диагональ экрана 10.1”<br/>
                                    – наличие свободной памяти от 3 ГБ
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-center about-app-platforms">
                            <div className="container">
                                <div className="mx-auto app-platforms-icon"></div>
                                <div className="app-platforms-title"><h4>Технологические платформы</h4></div>
                                <div className="app-platforms-text">
                                    – компьютеры под управлением ОС Windows 7, 8, 8.1, 10<br/>
                                    – планшеты под управлением ОС Android 4.4 и выше<br/>
                                    – IPad
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-center about-app-wifi">
                            <div className="container">
                                <div className="mx-auto app-wifi-icon"></div>
                                <div className="app-wifi-title"><h4>Для работы не требует подключения к Интернету</h4></div>
                                <div className="app-wifi-text">
                                    Интернет нужен для загрузки учебника на устройство. Загруженные учебники работают автономно, то есть не требуют подключения к интернету
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-center about-app-buying">
                            <div className="container">
                                <div className="mx-auto app-buying-icon"></div>
                                <div className="app-buying-title"><h4>Приобретение учебников внутри приложения</h4></div>
                                <div className="app-buying-text">
                                    Покупка учебников возможна напрямую из приложения, а также на сайте интернет-магазина Издательства
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="b-howToBuy">
                        <div><a href="/buying"><img src="/test-digital/wp-content/themes/digital.prosv.ru/react-src/src/components/img/howtobuy.png" alt=""/></a></div>
                        <div><a href="/buying-ur"><img src="/test-digital/wp-content/themes/digital.prosv.ru/react-src/src/components/img/howtobuy_yur.png" alt=""/></a></div>
                    </div>
                </div>
        <News/>
            </div>
        </>
        )
    }
}

export default AboutUs