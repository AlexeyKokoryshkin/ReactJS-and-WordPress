import React, { Component } from 'react';
import { Link } from 'react-router';

class BuyingUr extends Component {
    render () {
        return (
            <>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/test-digital" className="b-navbar__home">{ this.props.brand || 'Главная' }</Link></li>
                        <li className="breadcrumb-item"><Link to="/test-digital/aboutUs" className="b-navbar__home">{ 'Об ЭФУ' }</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Приобретение электронных учебников для юридических лиц</li>
                    </ol>
                </nav>
            </div>

            <div className="content">
                <div className="container-fluid main-title">
                        <h1 className="mx-auto">Приобретение электронных учебников для юридических лиц</h1>
                </div>
                <div className="buying-distrib-container">
                    <div className="container-fluid mx-auto buying-distrib-content">
                        <div className="buying-distrib-content-top">
                            <p>Образовательные организации могут приобрести электронные учебники напрямую у Издательства. Для этого необходимо следующее:<br/>
                            <ol>
                                <li>Заполнить договор и направить его Трофимовой Галине Владимировне по адресу <a href="mailto:GTrofimova@prosv.ru">GTrofimova@prosv.ru</a>. Во избежание ошибок в заполнении договора просим Вас не присылать оригиналы договора до его согласования сотрудником издательства;</li>
                                <li>Дождаться подтверждения заявки от сотрудника издательства. Срок рассмотрения заявки составляет 2-3 рабочих дня;</li>
                                <li>Отправить 2 подписанных экземпляра договора почтой по адресу 127473, город Москва, улица Краснопролетарская, дом 16, строение 3, этаж 4, помещение I (Трофимовой Галине Владимировне) или привезти лично;</li>
                                <li>Получить от сотрудника издательства счёт и оплатить его (указать назначение платежа, номер договора, номер счета и формулировку «за лицензии на ЭФУ»);</li>
                                <li>Активировать учётную запись в личном кабинете (данные вам будут высланы после поступления денежных средств на счёт издательства).</li>
                            </ol>
                            Оригиналы всех документов (счёт, договор, счёт-фактуру и акт) мы вышлем вам по почте.</p>
                            <br/>
                            <p><strong>Кроме того, вы можете приобрести электронные учебники у партнёров Издательства:</strong></p>
                            <br/>
                        </div>
                        <div className="row buying-distrib-content-bottom">
                            <div className="col-xl-4">
                                <strong>Название</strong>: Группа компаний «Альком»<br/>
                                <strong>Адрес</strong>: г. Омск, пр. Комарова, д. 21, к.1<br/>
                                <strong>Телефон</strong>: +8-800-2222-108<br/>
                                <strong>E-mail</strong>: <a href="mailto:info@alcom55.ru">info@alcom55.ru</a>; <a href="mailto:info@e-book24.ru">info@e-book24.ru</a><br/>
                                <strong>URL</strong>: <a href="http://www.alcom55.ru/" target="_blank" rel="noopener noreferrer">http://www.alcom55.ru</a>; <a href="http://www.e-book24.ru/" target="_blank" rel="noopener noreferrer">http://www.e-book24.ru</a><br/>
                                <br/>
                                <strong>Название</strong>: ООО «ИД «Комсомольская правда»<br/>
                                <strong>Адрес</strong>: 127287, г. Москва, Старый Петровско-Разумовский проезд, 1/23, стр.1<br/>
                                <strong>Телефон</strong>: +7 (495) 777-02-82, 777-02-84 доб. 1153, 2269<br/>
                                <strong>E-mail</strong>: <a href="mailto:info_shop@kp.ru">info_shop@kp.ru</a><br/>
                                <strong>URL</strong>: <a href="https://shop.kp.ru/" target="_blank" rel="noopener noreferrer">https://shop.kp.ru</a><br/>
                                <br/>
                                <strong>Название</strong>: ООО «ИД Первое сентября»<br/>
                                <strong>Адрес</strong>: 121165, г. Москва, ул. Киевская, 24<br/>
                                <strong>Телефон</strong>: +7 (495) 639-82-73<br/>
                                <strong>E-mail</strong>: <a href="mailto:ibook@1september.ru">ibook@1september.ru</a><br/>
                                <strong>URL</strong>: <a href="https://book.1sept.ru/" target="_blank" rel="noopener noreferrer">https://book.1sept.ru</a><br/>
                                <br/>
                                <strong>Название</strong>: ООО «Образование Урала»<br/>
                                <strong>Адрес</strong>: 620130, г. Екатеринбург, ул. Чайковского, д. 79 а<br/>
                                <strong>Телефон</strong>: +7 (904) 989-80-98<br/>
                                <strong>E-mail</strong>: <a href="mailto:9898098@mail.ru">9898098@mail.ru</a><br/>
                                <br/>
                                <strong>Название</strong>: ЭБС «Библиошкола»<br/>
                                <strong>Адрес</strong>: Москва, ул. Обручева, дом 34/63, стр. 3 (для корреспонденции: 117342, Москва, ул. Обручева, дом 34/63, стр. 1)<br/>
                                <strong>Телефон</strong>: 8-800-333-68-45 (звонок бесплатный), + 7 (495) 334-72-11<br/>
                                <strong>E-mail</strong>: <a href="mailto:manager@directmedia.ru">manager@directmedia.ru</a><br/>
                                <strong>URL</strong>: <a href="http://www.biblioschool.ru/" target="_blank" rel="noopener noreferrer">http://www.biblioschool.ru</a><br/>
                                <br/>
                            </div>
                            <div className="col-xl-4">
                                <strong>Название</strong>: ООО "Гемера-плюс"<br/>
                                <strong>Адрес</strong>: 410010, г. Саратов, ул. Осипова, д. 10А<br/>
                                <strong>Телефон</strong>: (8452) 64-78-24<br/>
                                <strong>E-mail</strong>: <a href="mailto:gemera@moya-kniga.ru">gemera@moya-kniga.ru</a><br/>
                                <strong>URL</strong>: <a href="http://moya-kniga.ru/" target="_blank" rel="noopener noreferrer">http://moya-kniga.ru</a><br/>
                                <br/>
                                <strong>Название</strong>: "ООО "Интех"<br/>
                                <strong>Адрес</strong>: 394000, Воронежская обл, Воронеж г, Революции пр-кт, дом № 1/1<br/>
                                <strong>Телефон</strong>: +7 (473) 212-03-12<br/>
                                <strong>E-mail</strong>: <a href="mailto:mail@pemkom.ru">mail@pemkom.ru</a><br/>
                                <strong>URL</strong>: <a href="http://pemkom.ru/" target="_blank" rel="noopener noreferrer">http://pemkom.ru</a><br/>
                                <br/>
                                <strong>Название</strong>: ООО «Компьютерная галактика»<br/>
                                <strong>Адрес</strong>: 656056, Барнаул, пл. им В.Н. Баварина, 2, оф. 303<br/>
                                <strong>Телефон</strong>: +7 (3852) 653 801<br/>
                                <strong>E-mail</strong>: <a href="mailto:info@compgalaxy.ru">info@compgalaxy.ru</a><br/>
                                <strong>URL</strong>:  <a href="http://www.compgalaxy.ru/" target="_blank" rel="noopener noreferrer">http://www.compgalaxy.ru</a><br/>
                                <br/>
                                <strong>Название</strong>: ИП Клевцова Анастасия Ильгизовна (товарный знак «АСП»)<br/>
                                <strong>Адрес</strong>: 620142, г. Екатеринбург, ул. Щорса 7, 2 этаж, офис 270<br/>
                                <strong>Телефон</strong>: (343) 222-12-11<br/>
                                <strong>E-mail</strong>: <a href="mailto:obr@asp-partners.ru">obr@asp-partners.ru</a><br/>
                                <strong>URL</strong>: <a href="http://asp-obr.ru/" target="_blank" rel="noopener noreferrer">http://asp-obr.ru</a><br/>
                                <br/>
                                <strong>Название</strong>: Торговая Компания "Люмна"<br/>
                                <strong>Адрес</strong>: 620137, г. Екатеринбург, ул. Студенческая, 1/В<br/>
                                <strong>Телефон</strong>: +7 (343) 228-10-70, 228-10-85<br/>
                                <strong>E-mail</strong>: <a href="mailto:tos@lumna.ru">tos@lumna.ru</a><br/>
                                <strong>URL</strong>: <a href="http://www.lumna.ru/" target="_blank" rel="noopener noreferrer">http://www.lumna.ru</a><br/>
                                <br/>
                            </div>
                            <div className="col-xl-4">
                                <strong>Название</strong>: ООО «Образовательный проект»<br/>
                                <strong>Адрес</strong>: 390011, г. Рязань, ул. Халтурина, 1б<br/>
                                <strong>Телефон</strong>: 8(4912) 45-54-01<br/>
                                <strong>E-mail</strong>: <a href="mailto:vlad110290@mail.ru">vlad110290@mail.ru</a><br/>
                                <strong>URL</strong>: <a href="http://www.book-rzn.ru/" target="_blank" rel="noopener noreferrer">http://www.book-rzn.ru</a><br/>
                                <br/>
                                <strong>Название</strong>: ООО «СитиМедиа»<br/>
                                <strong>Адрес</strong>: г. Нижний Новгород, Московское шоссе, д.17, корп.1, пом. П4<br/>
                                <strong>Телефон</strong>: 8 (831) 422-40-20<br/>
                                <strong>E-mail</strong>: <a href="mailto:zakaz@sitimedia.ru">zakaz@sitimedia.ru</a><br/>
                                <strong>URL</strong>: <a href="https://sitimedia.ru/" target="_blank" rel="noopener noreferrer">https://sitimedia.ru</a><br/>
                                <br/>
                                <strong>Название</strong>: ООО "Тандем-плюс"<br/>
                                <strong>Адрес</strong>: 192029, Санкт-Петербург г, Обуховской обороны пр-кт, дом № 105, офис 310<br/>
                                <strong>Телефон</strong>: (812)4126737<br/>
                                <strong>E-mail</strong>: <a href="mailto:congurer@mail.ru">congurer@mail.ru</a><br/>
                                <br/>
                                <strong>Название</strong>: ООО «Центр решений» (ГК Гэндальф)<br/>
                                <strong>Адрес</strong>: 344011, Ростовская обл, Ростов-на-Дону г, Гвардейский пер, дом № 11а<br/>
                                <strong>Телефон</strong>: 8 (8632)300-10-01; 8-804-333-09-69 (бесплатная линия)<br/>
                                <strong>E-mail</strong>: <a href="mailto:info@cr-obr.ru">info@cr-obr.ru</a>; <a href="mailto:sales@gendalf.ru">sales@gendalf.ru</a><br/>
                                <strong>URL</strong>: <a href="http://cr-obr.ru/" target="_blank" rel="noopener noreferrer">http://cr-obr.ru</a>; <a href="https://gendalf.ru/" target="_blank" rel="noopener noreferrer">https://gendalf.ru</a><br/>
                                <br/>
                                <strong>Название</strong>: АО «СофтЛайн Трейд»<br/>
                                <strong>Адрес</strong>: 410010, г. Саратов, ул. Осипова, д. 10А<br/>
                                <strong>Телефон</strong>: (8452) 64-78-24<br/>
                                <strong>E-mail</strong>: <a href="mailto:shkola@softline.ru">shkola@softline.ru</a><br/>
                                <strong>URL</strong>: <a href="http://school.softline.ru/catalog/book/" target="_blank" rel="noopener noreferrer">http://school.softline.ru</a><br/>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default BuyingUr