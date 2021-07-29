import react from 'react';
import {Link} from 'react-router-dom';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
const Header = () => (
    <div className="outer-container">
        <Link className="logo-container" to="/" >
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/Items">
                SHOP
            </Link>
            <Link className="option" to="/Items">
                CONTACT
            </Link>
        </div>
    </div>
);

export default Header; 