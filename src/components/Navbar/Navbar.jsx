import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import arrow from '../../assets/arrow.png';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // Get setCurrency function from context
    const { setCurrency } = useContext(CoinContext);

    // Handler to update the currency based on user selection
    const currencyHandler = (event) => {
        switch (event.target.value) {
            case 'usd':
                setCurrency({ name: 'usd', symbol: '$' });
                break;
            case 'eur':
                setCurrency({ name: 'eur', symbol: '€' });
                break;
            default:
                setCurrency({ name: 'usd', symbol: '$' });
                break;
        }
    };

    return (
        <div className='navbar'>
            <div className='navbar-left'>
                {/* Link to homepage */}
                <Link to='/'>
                    <img src={logo} alt="Logo" className='logo' />
                </Link>
                <h1 className='navbar-title'>CryptoSpotter</h1>
            </div>
            <ul className='navbar-menu'>
                <Link to='/'> <li>Home</li> </Link>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
            <div className="nav-right">
                <select onChange={currencyHandler}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                </select>
                <button>Sign up <img src={arrow} alt="Arrow" /> </button>
            </div>
        </div>
    );
};

export default Navbar;
