import React, { Component } from 'react';
import { Link } from 'react-router';

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
                <h1>О нас</h1>
                <p>Инфа о нас</p>
            </>
        )
    }
}

export default AboutUs