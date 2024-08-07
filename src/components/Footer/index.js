import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import logoFooter from "../../assets/logo-footer-sai.png";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="container">
            <footer>
                <div className="group-footer">
                    <div className="group-footer-infos footer1">
                        <Link className='logo' to="/" onClick={() => { scrollToTop(); }}>
                            <img src={logoFooter} alt='logo header' />
                        </Link>
                        <h3>Mudanças rápidas e fáceis é com a gente! De São Paulo para todo o Brasil.</h3>
                        <div className="social-midia-footer">
                            <a href='https://www.facebook.com/saitransportes/' target='_blank'>
                                <FaFacebookSquare className='icon-footer' />
                            </a>
                            <a href='https://www.instagram.com/saitransportes/' target='_blank'>
                                <FaInstagram className='icon-footer' />
                            </a>
                        </div>
                    </div>

                    <div className='group-links'>
                        <div className="group-footer-infos footer2">
                            <h4>Serviços</h4>
                            <ul>
                                <li><Link to="/mudancas-residenciais" onClick={scrollToTop}> Mudanças Residenciais </Link></li>
                                <li><Link to="/mudancas-comerciais" onClick={scrollToTop}>Mudanças Comerciais</Link></li>
                                <li><Link to="/icamento" onClick={scrollToTop}>Içamentos</Link></li>
                                <li><Link to="/embalagens" onClick={scrollToTop}>Embalagens</Link></li>
                                <li><Link to="/guarda-moveis" onClick={scrollToTop}>Guarda-Móveis</Link></li>
                            </ul>
                        </div>

                        <div className="group-footer-infos footer3">
                            <h4>Contato</h4>
                            <ul>
                                <li>irimar@saitransportes.com.br</li>
                                <li><FaWhatsapp className='icon-whats' size={18} />(11) 5641-0170</li>
                                <li><FaWhatsapp className='icon-whats' size={18} />(11) 94731-2874</li>
                                <li><FaWhatsapp className='icon-whats' size={18} />(11) 94725-1920</li>
                            </ul>
                        </div>
                    </div>
                    <div className="group-footer-infos">
                        <h4>Nosso Endereço</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.74053610242!2d-46.712551725484!3d-23.6494613648332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51001647c279%3A0xc7cca9486f5b2501!2sSai%20Transportes%20e%20Mudan%C3%A7as!5e0!3m2!1spt-BR!2sbr!4v1719546999589!5m2!1spt-BR!2sbr" width="400" height="200" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <p>R. Antônio Fogal, 392 - Vila São Paulo,
                            <br />São Paulo - SP, 04650-160</p>
                    </div>
                </div>
                <div className="group-copy-dev">
                    <div className="copy">
                        <p>© 2024 Copyright, Todos os direitos reservados a Sai Transportes.</p>
                    </div>
                    <div className="dev">
                        <p>Site desenvolvido por Zeero.Digital</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;