import React from 'react';
import PropTypes from 'prop-types';
import './bannerHome.css';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Banner = ({ title, description, backgroundImage, buttonLabel, buttonLink }) => {
    const bannerStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    const location = useLocation();

    return (
        <div className="banner-home" style={bannerStyle}>
            <div className="banner-content-home">
                <h1>{title}</h1>
                <p>{description}</p>
                <ScrollLink
                    to="contato"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={1200}
                    className={`contato-header nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    activeClass="active-scroll"

                >
                    <button href={buttonLink} className="botao-orcamento">
                        {buttonLabel}
                    </button>
                </ScrollLink>

            </div>
        </div>
    );
};

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string,
    buttonLink: PropTypes.string
};

Banner.defaultProps = {
    buttonLabel: null,
    buttonLink: null,
};

export default Banner;