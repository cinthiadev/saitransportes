

import React, { useState } from 'react';
import './contact.css';
import imageContact from '../../assets/imageContact.png';
import emailjs from 'emailjs-com';
import { FaCircleCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const SuccessPopup = ({ message, onClose, handleClose }) => {
    return (
        <div>
            <div className="modal-overlay" onClick={handleClose}></div>

            <div className='modal'>
                <section className='modal-main' style={{ position: 'relative', padding: '40px 40px'}}>
                    <button className='btn-cancel-modal close-success' onClick={onClose} style={{ 
                        position: 'absolute', 
                        top: '10px', // distância do topo
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#000'
                    }}>
                        <IoClose size={'20px'} />
                    </button>

                    <FaCircleCheck size={50} color='var(--cor-principal)' />
                    <h3 style={{ marginTop: '20px', marginBottom: '0px', color: "#000" }}>Mensagem enviada com sucesso!</h3>
                </section>
            </div>

        </div>
    );
};
const Contact = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_gquzhes', 'template_62lf8v6', event.target, 'DbNcohiwnEQhnc4eO')
            .then((result) => {
                handleShowPopup();
            }, (error) => {
                console.log(error.text);
                alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
            });

        event.target.reset();
    };

    return (
        <div className="banner-contact" id='contato'>
            <div className="contact-content-desktop">
                <h1>Precisa de um orçamento? <br />
                    Entre em contato com a gente!</h1>
                <div className='contact-form-image'>
                    <div className='group-container-contact' >

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nome</label>
                                <input type="text" id="name" name="name" placeholder='Digite seu nome *' required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder='Digite seu email *' required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="assunto">Assunto</label>
                                <input type="text" id="assunto" name="assunto" placeholder='Digite sobre qual assunto *' required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tel">Telefone</label>
                                <input type="tel" id="tel" name="tel" placeholder='Telefone para contato *' required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Mensagem</label>
                                <textarea di="message" name="message" rows="4" placeholder='Informe sua necessidade *' required></textarea>
                            </div>
                            <button type="submit" className="submit-button">Enviar Mensagem</button>
                        </form>
                    </div>
                    <div className='imagem-footer'>
                        <img src={imageContact} />
                    </div>
                </div>
            </div>

            <div className="contact-content-mobile">
                <h1>Precisa de um orçamento? <br />
                    Entre em contato com a gente!</h1>
                <div className='group-container-contact'>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input type="text" id="name" name="name" placeholder='Digite seu nome *' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder='Digite seu email *' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="assunto">Assunto</label>
                            <input type="text" id="assunto" name="assunto" placeholder='Digite sobre qual assunto *' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tel">Telefone</label>
                            <input type="tel" id="tel" name="tel" placeholder='Telefone para contato *' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensagem</label>
                            <textarea id="message" name="message" rows="4" placeholder='Informe sua necessidade *' required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Enviar Mensagem</button>
                    </form>

                    <div className='imagem-footer'>
                        <img src={imageContact} />
                    </div>
                </div>
            </div>
            {showPopup && <SuccessPopup onClose={handleClosePopup} />}
        </div>
    );
};

export default Contact;