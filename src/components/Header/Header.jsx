import React from 'react'

// components 👉
import './static/css/Header.css';
import Header_image from './static/image/Header_image.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="Header">
            <div className='Header_above'>
                <div className='Header_above_left'>
                    <p>Enjoy the Beso while we fix your car</p>
                </div>
                <div className='Header_above_right'>
                    <p className='Header_above_right_week_time'>Monday - Saturday 7:00AM 6:00AM</p>
                    <p className='Header_above_right_welcome'>Welcome: Admin</p>
                </div>
            </div>
            <nav className="Header_navbar">
                <div className="Header_container">
                    <Link to='/'>
                        <img className="Header_image" src={Header_image} alt="Header_image" />
                    </Link>
                    <div className="Header_collapse">
                        <ul className="Header_nav">
                            <li className="Header_item">
                                <Link to="/" className="Header_link">home</Link>
                            </li>
                            <li className="Header_item">
                                <Link to="/about" className="Header_link">about us</Link>
                            </li>
                            <li className="Header_item">
                                <Link to="/services" className="Header_link">services</Link>
                            </li>
                            <li className="Header_item">
                                <Link to="/contact" className="Header_link">contact us</Link>
                            </li>
                            <li className="Header_item push_right">
                                <Link to="/admin" className="Header_link">admin</Link>
                            </li>
                            <div className="border_right"></div>
                            <li className="Header_item">
                                <Link to='/login' className='Header_link_sign'>
                                    sign in
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;