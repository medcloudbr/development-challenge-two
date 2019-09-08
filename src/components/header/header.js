import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

function Header() {
    return(
        <header>
            <h1>Header</h1>
            <div>
                <Link to="/users">Users</Link>
            </div>
        </header>
    );
}

export default Header;