import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { connect } from 'react-redux';
import { closeModal } from './ModalActions';
import LoginForm from '../auth/login/LoginForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
};

function LoginFormModal({ closeModal }) {

    return (
        <Modal
            open={true}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <LoginForm />
            </Box>
        </Modal>
    );
}

const mapDispatchToProps = {
    closeModal
}

export default connect(null, mapDispatchToProps)(LoginFormModal);