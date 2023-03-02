import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { openModal } from '../../../features/Modals/ModalActions'

function Protected({ isSignedIn, children, openModal }) {
    if (isSignedIn) {
        openModal('UnAuthModal')
        return <Navigate to='/event' replace />
    }
    return children
}

const mapDispatchToProps = {
    openModal
}

export default connect(null, mapDispatchToProps)(Protected)