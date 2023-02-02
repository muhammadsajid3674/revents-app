import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { closeToastr } from './toastrActions';
import { connect } from 'react-redux';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Toastr({ closeToastr, severity, message }) {

    return (
        <Snackbar open={true} autoHideDuration={6000} onClose={closeToastr}>
            <Alert onClose={closeToastr} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
}

const mapDispatchToProps = {
    closeToastr
}

export default connect(null, mapDispatchToProps)(Toastr);