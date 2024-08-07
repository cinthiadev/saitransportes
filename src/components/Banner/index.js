import React from 'react';
import PropTypes from 'prop-types';
import './banner.css';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Banner = ({ title, description, backgroundImage, buttonLabel, buttonLink }) => {
    const bannerStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    const location = useLocation();

    return (
        <div className="banner" style={bannerStyle}>
            <div className="banner-content">
                <h1>{title}</h1>
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