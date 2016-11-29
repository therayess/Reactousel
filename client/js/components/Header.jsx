import React from 'react';
import { Link } from 'react-router';
import connector from './App';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div>
                    <Link to='/'>My Carousel</Link>
                    <div>By Ammar Rayess</div>
                </div>
            </header>
        )
    }
}

module.exports = connector(Header);
