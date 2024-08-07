import React, { useState, useRef, useEffect } from 'react';
import './duvidas.css';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Duvidas = ({ faqData }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const answerRefs = useRef([]);

    const toggleAccordion = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null); // Fechar o atual
        } else {
            setActiveIndex(index); // Abrir o novo
        }
    };

    useEffect(() => {
        answerRefs.current.forEach((ref, index) => {
            if (ref) {
                if (index === activeIndex) {
                    ref.style.maxHeight = `${ref.scrollHeight}px`;
                } else {
                    ref.style.maxHeight = '0';
                }
            }
        });
    }, [activeIndex]);

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
                        <div
                            ref={(el) => (answerRefs.current[index] = el)}
                            className={`faq-answer ${activeIndex === index ? 'show' : ''}`}
                        >
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Duvidas;