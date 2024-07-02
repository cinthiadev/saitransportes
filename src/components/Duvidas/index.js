import React, { useState } from 'react';
import './duvidas.css';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Duvidas = ({ faqData }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="faq-accordion">
            <div className='content-faq'>
                <h2>Dúvidas Frequentes</h2>
                {faqData.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <div className={`faq-question ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                            <h3>{faq.question}</h3>
                            <span className="toggle-icon">{activeIndex === index ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
                        </div>
                        <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Duvidas;