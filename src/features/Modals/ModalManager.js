import React from 'react'
import { connect } from 'react-redux';
import TestModal from './TestModals';
import LoginFormModal from './LoginFormModal';
import RegisterFormModal from './RegisterFormModal';

const modalLookup = {
    TestModal,
    LoginFormModal,
    RegisterFormModal
}

const ModalManager = ({ currentModal }) => {

    let renderModal;

    if (currentModal) {
        const { modalType, modalProps } = currentModal;
        const ModalComponent = modalLookup[modalType];

        renderModal = <ModalComponent {...modalProps} />
    }

    return (
        <span>{renderModal}</span>
    )
}

const mapStateToProps = (state) => ({
    currentModal: state.modals
});

export default connect(mapStateToProps)(ModalManager);