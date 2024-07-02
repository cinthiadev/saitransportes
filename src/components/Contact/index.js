import React from 'react';
import './contact.css';
import imageContact from '../../assets/imageContact.png';

const Contact = () => {

    return (
        <div className="banner-contact" id='contato'>
            <div className="contact-content-desktop">
                <h1>Precisa de um orçamento? <br />
                    Entre em contato com a gente!</h1>
                <div className='contact-form-image'>
                    <div className='group-container-contact'>

                        <form className="contact-form">
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

                    <form className="contact-form">
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
        </div>
    );
};

export default Contact;