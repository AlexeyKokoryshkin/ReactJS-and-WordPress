import React, { Component } from 'react'

class Main extends Component {
    render () {
        return (
            <>
                <div className="content main-page">
	 <div className="container-fluid px-0 main-page-top">
	 	<div className="container-fluid row">
	 		<div className="col-md-6 px-0 my-auto main-page-text"><h2>Цифровые ресурсы и сервисы для школы</h2><p>Группа компаний «Просвещение», поддерживая рекомендации Минпросвещения РФ о переводе образовательного процесса в дистанционную форму, открывает <strong>свободный доступ к электронным формам учебников и образовательным сервисам</strong> на платформе «<a href="https://media.prosv.ru/" target="blank">Медиатека</a> «Просвещения»*. Также организована горячая линия методической помощи для учителей и школ <a href="mailto:vopros@prosv.ru">vopros@prosv.ru</a>.</p></div>
	 		<div className="col-md-6 my-auto">
	 			<img className="p-3" src="/test-digital/wp-content/themes/digital.prosv.ru/react-src/src/components/img/efu.png" alt=""/>
	 		</div>
	 	</div>
	 </div>
	 <div className="container-fluid px-0 main-page-links-top">
	 	<div className="container-fluid px-0 mx-auto my-auto row">
	 		<div className="col-lg-4 text-center main-page-free-download">
	 			<div className="container">
                                    <div className="free-download-icon"></div>
                                    <a href="https://media.prosv.ru/" target="_blank" className="main-page-main-link">Бесплатный доступ к ЭФУ на платформе «Медиатека «Просвещения»</a>
                                    <a href="/test-digital/wp-content/themes/digital.prosv.ru/react-src/src/components/instructions/Просвещение_Медиатека.pdf" target="_blank" className="main-page-main-link download-instructions-link">Скачать инструкцию</a>
	 			</div>
	 		</div>
                        <div className="col-lg-4 text-center main-page-english-spotlight">
	 			<div className="container">
                                    <div className="english-spotlight-icon"></div>
                                    <a href="https://edu.skyeng.ru/" target="_blank" className="main-page-main-link"> Цифровая образовательная среда Skyes School.<br/>Английский язык</a>
                                    <a href="/test-digital/wp-content/themes/digital.prosv.ru/react-src/src/components/instructions/skyes_school_skyeng.pdf" target="_blank" className="main-page-main-link download-instructions-link">Скачать инструкцию</a>
	 			</div>
	 		</div>
                        <div className="col-lg-4 text-center main-page-webinars">
	 			<div className="container">
                                    <div className="webinars-icon"></div>
                                    <a href="https://prosv.ru/webinars" target="_blank" className="main-page-main-link">Вебинары от издательства "Просвещение"</a>
                                    <a href="/test-digital/wp-content/themes/digital.prosv.ru/react-src/src/components/instructions/Просвещение_вебинары_инструкция.pdf" target="_blank" className="main-page-main-link download-instructions-link">Скачать инструкцию</a>
	 			</div>
	 		</div>
	 	</div>
	 </div>
         <div className="container-fluid px-0 main-page-links-bot">
	 	<div className="container-fluid px-0 mx-auto my-auto row">
                        <div className="col-lg-4 text-center main-page-olimpium">
	 			<div className="container">
                                    <div className="olimpium-icon"></div>
                                    <a href="https://olimpium.ru/?utm_source=digital.prosv.ru&utm_medium=banner&utm_campaign=promo" target="_blank" className="main-page-main-link">Каталог олимпиад и курсов</a>
	 			</div>
	 		</div>
                        <div className="col-lg-4 text-center main-page-assets">
	 			<div className="container">
                                    <div className="assets-icon"></div>
                                    <a href="https://catalog.prosv.ru/category/14" target="_blank" className="main-page-main-link">Рабочие программы и методические пособия </a>
                                    <a href="/test-digital/wp-content/themes/digital.prosv.ru/react-src/src/components/instructions/Просвещение_Рабочие_программы_инструкция.pdf" target="_blank" className="main-page-main-link download-instructions-link">Скачать инструкцию</a>
	 			</div>
	 		</div>
                        <div className="col-lg-4 text-center main-page-shop-link">
	 			<div className="container">
                                    <div className="shop-link-icon"></div>
                                    <a href="https://shop.prosv.ru/" target="_blank" className="main-page-main-link">Интернет-магазин издательства "Просвещение"</a>
	 			</div>
	 		</div>
	 	</div>
	 </div>
</div>

<div className="disclaimer-container">
        <div className="container-fluid disclaimer-text">
            *Уважаемые пользователи, настоящим доводим до вашего сведения, что бесплатный доступ к учебникам и учебным пособиям АО «Издательство «Просвещение» предоставляется для физических и юридических лиц, находящихся на территории Российской Федерации и за рубежом, где временно приостановлено обязательное посещение образовательных организаций учащимися по причине распространения коронавирусной инфекции на весь срок действия таких мер. Бесплатный доступ предоставляется только для некоммерческого использования произведений, учебников и учебных пособий, при этом предоставленное право на использование учебников и учебных пособий означает право на доступ к ним для чтения (ознакомления) в разделе «Библиотека» платформы «Медиатека «Просвещения» (media.prosv.ru/content) без возможности скачивания, сохранения копий на пользовательские устройства, распространения таких копий и иного тиражирования и/или использования в любой форме, без права предоставления сублицензий третьим лицам. Сроки предоставления доступа с 19 марта по 18 июня 2020 года.
        </div>
</div>
            </>
        )
    }
}

export default Main