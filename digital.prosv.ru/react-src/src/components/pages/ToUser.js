import React, { Component } from 'react';
import { Link } from 'react-router';

class ToUser extends Component {
    render () {
        return (
            <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/test-digital" className="b-navbar__home">{ this.props.brand || 'Главная' }</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Пользователю</li>
                </ol>
            </nav>
                <h1>Инфа пользователю</h1>
                <p>Страница с инфой юзеру</p>
            </>
        )
    }
}

export default ToUser