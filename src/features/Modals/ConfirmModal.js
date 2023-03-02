import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { connect } from 'react-redux';
import { closeModal } from './ModalActions';
import { Stack, Typography } from '@mui/material';
import { ThemeBtnPri } from '../../components/button/ThemeBtn';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3
};

function ConfirmModal({ closeModal, successClick, message }) {

    return (
        <Modal
            open={true}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography variant='body1'>{message}</Typography>
                <Stack direction='row' justifyContent='space-between'>
                    <ThemeBtnPri onClick={successClick} color='success' label='Ok' />
                    <ThemeBtnPri onClick={closeModal} color='themeGrey' label='Cancel' />
                </Stack>
            </Box>
        </Modal>
    );
}

const mapDispatchToProps = {
    closeModal
}

export default connect(null, mapDispatchToProps)(ConfirmModal);