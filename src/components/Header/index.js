import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import { FaBars, FaTimes, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import logoHeader from "../../assets/logo-menu-sai-transportes.png";
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0
        });
    };

    return (
        <div className='container-header'>
            <div className='header-top'>
                <h2>Mudanças nacionais em São Paulo na Zona Sul</h2>
                <div className='button'>
                    <button className='button-whats'> <a href='https://wa.me/5511947312874' target='_blank'> <FaWhatsapp className='icon-whats' /> (11) 94731-2874 </a></button>
                </div>
            </div>
            <nav className="navbar">
                <Link className='logo' to="/" onClick={() => { scrollToTop(); }}>
                    <img src={logoHeader} alt='logo header' />
                </Link>

                <div className={`links ${showMenu ? 'active' : ''}`}>
                    <Link
                        to="/"
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                        onClick={() => { closeMenu(); scrollToTop(); }}
                    >
                        A Empresa
                    </Link>
                    <Link
                        to="/mudancas-residenciais"
                        className={`nav-link ${location.pathname === '/mudancas-residenciais' ? 'active' : ''}`}
                        onClick={() => { closeMenu(); scrollToTop(); }}
                    >
                        Mudanças Residenciais
                    </Link>
                    <Link
                        to="/mudancas-comerciais"
                        className={`nav-link ${location.pathname === '/mudancas-comerciais' ? 'active' : ''}`}
                        onClick={() => { closeMenu(); scrollToTop(); }}
                    >
                        Mudanças Comerciais
                    </Link>
                    <Link
                        to="/icamento"
                        className={`nav-link ${location.pathname === '/icamento' ? 'active' : ''}`}
                        onClick={() => { closeMenu(); scrollToTop(); }}
                    >
                        Içamento
                    </Link>
                    <Link
                        to="/embalagens"
                        className={`nav-link ${location.pathname === '/embalagens' ? 'active' : ''}`}
                        onClick={() => { closeMenu(); scrollToTop(); }}
                    >
                        Embalagens
                    </Link>
                    <Link
                        to="/guarda-moveis"
                        className={`nav-link ${location.pathname === '/guarda-moveis' ? 'active' : ''}`}
                        onClick={() => { closeMenu(); scrollToTop(); }}
                    >
                        Guarda-Móveis
                    </Link>
                    <Link
                        to="/blog"
                        className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
                        onClick={() => { closeMenu(); scrollToTop(); }}
                    >
                        Blog
                    </Link>
                    <ScrollLink
                        to="contato"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={1200}
                        className={`contato-header nav-link ${location.pathname === '/' ? 'active' : ''}`}
                        activeClass="active-scroll"
                        onClick={closeMenu}
                    >
                        Contato
                    </ScrollLink>
                </div>

                <div className="menu-toggle" onClick={toggleMenu}>
                    {showMenu ? <FaTimes /> : <FaBars />}
                </div>
                {showMenu && <div className="menu-overlay" onClick={toggleMenu}></div>}

                <div className='social-media'>
                    <a className='icon-social-media' href='https://www.instagram.com/saitransportes/' target='_blank' rel="noopener noreferrer">
                        <FaInstagram size={24} />
                    </a>
                    <a className='icon-social-media' href='https://www.facebook.com/saitransportes/' target='_blank' rel="noopener noreferrer">
                        <FaFacebook size={24} />
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;