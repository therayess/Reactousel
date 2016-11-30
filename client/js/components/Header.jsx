import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to='/' className="site-logo">Reactousel</Link>
                <div className="author">By Ammar Rayess</div>
            </header>
        )
    }
}

module.exports = Header;
