import React from 'react'
import { connect, useSelector } from 'react-redux';
import Toastr from './ToastrComponent';

const toastrLookUp = {
    Toastr
}

const ToastrManager = ({ currentToaster }) => {

    let renderToastr;

    if (currentToaster) {
        const { toastrProps, toastrType } = currentToaster;
        const ToastrComponent = toastrLookUp[toastrType]

        renderToastr = <ToastrComponent {...toastrProps} />
    }

    return (
        <span>{renderToastr}</span>
    )
}

const mapStateToProps = (state) => ({
    currentToaster: state.toastr
});

export default connect(mapStateToProps)(ToastrManager)