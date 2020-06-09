import React, { Component } from 'react';
import { Link } from 'react-router';

class ToDistributor extends Component {
    render () {
        return (
            <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/test-digital" className="b-navbar__home">{ this.props.brand || 'Главная' }</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Дистрибьютору</li>
                </ol>
            </nav>
                <h1>Инфа дистрибьютору</h1>
                <p>Страница с инфой дистру</p>
            </>
        )
    }
}

export default ToDistributor