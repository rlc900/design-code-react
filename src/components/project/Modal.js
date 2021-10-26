import React from 'react';
import {H1} from '../styles/TextStyles'
import { themes } from '../styles/ColorStyles'; 
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
                <Name><a href={props.selectedModal.url}>{props.selectedModal.name}</a>
                <br/>
                <span>{props.selectedModal.description}</span>
                </Name>
            </div>
        </>
    );
};

export default Modal;

const Name = styled(H1)`

    a {
        background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        font-size: 30px;
        line-height: 1em;
    }
    span {
        color: ${themes.dark.text1};
        background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        font-size: 20px;
        line-height: 1em;
    }
`