import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { connect } from 'react-redux';
import { closeModal, openModal } from './ModalActions';
import { ButtonGroup, Divider, Typography } from '@mui/material';
import { ThemeBtnPri } from '../../components/button/ThemeBtn';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 2
};

function UnAuthModal({ closeModal, openModal }) {

    return (
        <Modal
            open={true}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography variant='h5'>You need to sign in to so that!</Typography>
                <Divider />
                <Typography variant='body1'>Please either login or register to see this page.</Typography>
                <Box sx={{ textAlign: 'center' }}>
                    <ButtonGroup
                        size="large"
                        disableElevation
                        variant="contained"
                        aria-label="Large elevation buttons"
                    >
                        <ThemeBtnPri onClick={() => openModal('LoginFormModal')} color='info' label='Login' />
                        <ThemeBtnPri onClick={() => openModal('RegisterFormModal')} color='success' label='Register' />
                    </ButtonGroup>
                </Box>
                <Divider />
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant='body1' sx={{ marginBottom: 1 }}>Or click cancel to continue as a guest</Typography>
                    <ThemeBtnPri onClick={closeModal} color='themeGrey' label='Cancel' />
                </Box>
            </Box>
        </Modal>
    );
}

const mapDispatchToProps = {
    closeModal,
    openModal
}

export default connect(null, mapDispatchToProps)(UnAuthModal);