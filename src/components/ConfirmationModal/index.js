import React from 'react';
import './confirmationModal.css';
import { IoAlertCircle } from "react-icons/io5";

const ConfirmationModal = ({ show, handleClose, handleConfirm }) => {
    const modalClassName = show ? 'modal display-block' : 'modal display-none';

    return (
        <div className={modalClassName}>
            <div className="modal-overlay" onClick={handleClose}></div>

            <div className='modal'>
                <section className='modal-main' style={{ padding: '40px 40px' }} >
                    <IoAlertCircle size={50} color='var(--cor-principal)' style={{ marginBottom: '10px' }}/>
                    <h2>Deseja realmente excluir este post?</h2>
                    <div className='modal-buttons' style={{ paddingTop: '20px' }}>
                        <button className='btn-cancel-modal' onClick={handleClose}>Cancelar</button>
                        <button className='btn-excluir-modal' onClick={handleConfirm}>Confirmar</button>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default ConfirmationModal;