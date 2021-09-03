import React from 'react';
import styles from './Modal.module.css';
import Backdrop from './Backdrop'
import styled from 'styled-components'

const Modal = (props) => {
    return (
        <>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div 
            className={styles.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity : props.show ? 1 : 0
            }}>
                {props.selectedModal.name}
                {props.selectedModal.description}
            </div>
        </>
    );
};

export default Modal;

