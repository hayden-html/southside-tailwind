import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './nav.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { label: 'About', url: '/about' },
        { label: 'Blog', url: '/blog' },
        { label: 'Climb', url: '/climb' },
        { label: 'Contact', url: '/contact' },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="logo">Southside Climbing</div>
            <div className="toggle" onClick={toggleMenu}>
                {isOpen ? <FaTimes size="28" /> : <FaBars size="28" />}
            </div>
            <ul className={isOpen ? 'open' : ''}>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.url} onClick={toggleMenu}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;