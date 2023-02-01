import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { connect } from 'react-redux';
import { closeModal } from './ModalActions';
import RegisterForm from '../auth/register/RegisterForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
};

function RegisterFormModal({ closeModal }) {

    return (
        <Modal
            open={true}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <RegisterForm />
            </Box>
        </Modal>
    );
}

const mapDispatchToProps = {
    closeModal
}

export default connect(null, mapDispatchToProps)(RegisterFormModal);