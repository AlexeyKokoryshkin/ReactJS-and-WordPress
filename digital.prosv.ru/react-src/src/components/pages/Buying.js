import React, { Component } from 'react';
import { Link } from 'react-router';

class Buying extends Component {

    render () {
        return (
            <>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/test-digital" className="b-navbar__home">{ this.props.brand || 'Главная' }</Link></li>
                        <li className="breadcrumb-item"><Link to="/test-digital/aboutUs" className="b-navbar__home">{ 'Об ЭФУ' }</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Приобретение электронных учебников для физических лиц</li>
                    </ol>
                </nav>
            </div>
            <div id="top" className="content">
                <div className="container-fluid main-title">
                    <h1 className="mx-auto">Приобретение электронных учебников для физических лиц</h1>
                </div>
                <div className="buying-user-container">
                    <div className="container-fluid mx-auto buying-user-prosv">
                        <img src="/test-digital/wp-content/themes/digital.prosv.ru/react-src/src/components/img/howtobuy_prosv.png" alt=""/>
                        <div className="buying-user-text">
                            Родители, ученики и учителя могут приобрести электронные учебники внутри приложения «Учебники Просвещение». В разделе «Витрина» доступны все актуальные учебники издательства, оплата заказа происходит непосредственно в приложении.
                            <br/>Кроме того, в <a href="https://shop.prosv.ru/">интернет-магазине Издательства</a> продаются не только бумажные учебники, но и электронные. Для приобретения электронных учебников через интернет-магазин достаточно оформить заказ и следовать инструкциям из письма, чтобы получить учебники.
                        </div>
                    </div>
                    <div className="container-fluid second-title">
                        <h2 className="mx-auto">Наши партнёры</h2>
                    </div>
                    <div className="container-fluid mx-auto buying-user-alkom">
                        <img src="/test-digital/wp-content/themes/digital.prosv.ru/react-src/src/components/img/howtobuy_alkom.png" alt=""/>
                        <div className="buying-user-text">
                            <p>В <a href="http://www.e-book24.ru/">интернет-магазине электронных учбников</a> представлены учебники издательств «Просвещения», «Дрофа»-«Вентана-Граф»-«Астрель», «Бином.Лаборатория знаний», ОАО «Центр аддитивных технологий» для покупки.  </p>
                        </div>
                    </div>
                    <div className="container-fluid mx-auto buying-user-kp">
                        <img src="/test-digital/wp-content/themes/digital.prosv.ru/react-src/src/components/img/howtobuy_kp.png" alt=""/>
                        <div className="buying-user-text">
                        <p>В <a href="https://shop.kp.ru/category/ehlektronnye-knigi/uchebniki/">интернет-магазине "Комсомольская правда"</a> представлены для покупки электронные формы учебников Издательства.  </p>
                        </div>
                    </div>
                </div>
	        </div>
            </>
        )
    }
}

export default Buying