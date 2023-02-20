import { useContext } from 'react';
import { createPortal } from 'react-dom';

import style from './Modal.module.css'

import Card from '../Card';
import Button from '../Button';
import modalContext from '../../../store/modal-context';

const modalEl = document.querySelector('#modal')

function Backdrop(props) {
    return <div className={style.backdrop} onClick={props.onClose} />;
};

function ModalOverlay(props) {
    return (
        <Card className={style.modal}>
            <div className={style.content}>{props.children}</div>
            <Button onClick={props.onClose} textCont="Close" />
        </Card>
    );
};

export default function Modal(props) {
    const modalCtx = useContext(modalContext)
    return (
        <>
            <Backdrop onClose={modalCtx.setShowModal.bind(null, false)} />
            <ModalOverlay onClose={modalCtx.setShowModal.bind(null, false)}>{props.children}</ModalOverlay>,
        </>
    )
}

createPortal(<Modal></Modal>, modalEl)