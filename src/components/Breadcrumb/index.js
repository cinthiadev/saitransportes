import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './breadcrumb.css';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Breadcrumb = () => {
    const location = useLocation();
    // Supondo que a URL da rota do post tenha um formato como "/blog/:postId"
    const postId = location.pathname.split('/').pop(); // Obtém o último segmento da URL como o ID do post

    return (
        <nav>
            <ol className="breadcrumb">
                <li>
                    <Link to="/">Página Inicial</Link>
                </li>
                <MdOutlineKeyboardDoubleArrowRight className='icon-breadcrumb' />
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <MdOutlineKeyboardDoubleArrowRight className='icon-breadcrumb'/>
                <li>{postId}</li>
            </ol>
        </nav>
    );
};

export default Breadcrumb;