import './headerBackup.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logoHeader from "../../assets/logo-menu-sai-transportes.png";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { Link as ScrollLink } from 'react-scroll';

function HeaderBackup() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setHeaderFixed(true);
            } else {
                setHeaderFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
        window.scrollTo(0, 0); // Adicionado para rolar até o topo
    };

    return (
        <div className="content">
            <header className={`${headerFixed ? 'header-fixed header-white-bg' : ''}`}>
                <Link className='logoHeader' to="/"> <img src={logoHeader} alt='logo header' /> </Link>

                <div className={`menu-toggle ${menuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
                    {!menuOpen ? (
                        <div className='menu-bar'>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    ) : (
                        <div className="close-icon">x</div>
                    )}
                </div>

                <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
                    <Link
                        to="/"
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                        onClick={closeMenu}
                    >A Empresa</Link>
                    <Link
                        to="/mudancas-residenciais"
                        className={`nav-link ${location.pathname === '/mudancas-residenciais' ? 'active' : ''}`}
                        onClick={closeMenu}
                    >Mudanças Residenciais</Link>
                    <Link
                        to="/mudancas-comerciais"
                        className={`nav-link ${location.pathname === '/mudancas-comerciais' ? 'active' : ''}`}
                        onClick={closeMenu}
                    >Mudanças Comerciais</Link>
                    <Link
                        to="/icamento"
                        className={`nav-link ${location.pathname === '/icamento' ? 'active' : ''}`}
                        onClick={closeMenu}
                    >Içamento</Link>
                    <Link
                        to="/embalagens"
                        className={`nav-link ${location.pathname === '/embalagens' ? 'active' : ''}`}
                        onClick={closeMenu}
                    >Embalagens</Link>
                    <Link
                        to="/guarda-moveis"
                        className={`nav-link ${location.pathname === '/guarda-moveis' ? 'active' : ''}`}
                        onClick={closeMenu}
                    >Guarda-Móveis</Link>
                    <Link
                        to="/blog"
                        className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
                        onClick={closeMenu}
                    >Blog</Link>
                    <ScrollLink
                        to="contato"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                        activeClass="active-scroll"
                        onClick={closeMenu}
                    >Contato</ScrollLink>
                </nav>

                <div className='social-media'>
                    <a className='icon-social-media' href='' target='_blank'><FaInstagram size={24} /></a>
                    <a className='icon-social-media' href='' target='_blank'><FaFacebook size={24} /></a>
                </div>
            </header>
        </div>
    );
}

export default HeaderBackup;