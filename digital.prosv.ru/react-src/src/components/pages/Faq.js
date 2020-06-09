import React, { Component } from 'react';
import { Link } from 'react-router';

class Faq extends Component {
    render () {
        return (
            <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/test-digital" className="b-navbar__home">{ this.props.brand || 'Главная' }</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Частые вопросы</li>
                </ol>
            </nav>
                <h1>Частые вопросы</h1>
                <p>Страница faq</p>
            </>
        )
    }
}

export default Faq