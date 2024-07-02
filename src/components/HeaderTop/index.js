import './headerTop.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logoHeader from "../../assets/logo-menu-sai-transportes.png";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { FaWhatsapp } from "react-icons/fa";

function HeaderTop() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [menuOpenBackground, setMenuOpenBackground] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setMenuOpenBackground(!menuOpen);
    };

    const scrollTo = (targetId) => {
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = targetElement.getBoundingClientRect().top;
            scroll.scrollTo(offset, {
                duration: 800,
            });
            setMenuOpen(false);
        }
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setMenuOpenBackground(false);
    };

    return (
        <div className="content">

            <div className='header-top'>
                <h2>Mudanças nacionais em São Paulo na Zona Sul</h2>
                <div className='button'>
                    <button className='button-whats'><FaWhatsapp className='icon-whats' /> (11) 94731-2874</button>
                </div>
            </div>

        </div>
    );
}

export default HeaderTop;
