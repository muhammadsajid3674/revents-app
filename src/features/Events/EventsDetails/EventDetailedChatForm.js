import { Box } from '@mui/material';
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { ThemeBtnPri } from '../../../components/button/ThemeBtn';
import TextArea from '../../../components/ReduxForm/TextArea';

class EventDetailedChatForm extends Component {

    handleSendComment = (comment) => {
        const { addEventComment, eventId, reset, handleCloseReplyField, parentId } = this.props;
        addEventComment(eventId, comment, parentId)
        reset()
        if (parentId !== 0) {
            handleCloseReplyField()
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <Box component='form'>
                <Field placeholder='Comment' name='comment' component={TextArea} />
                <ThemeBtnPri label='Add Reply' onClick={handleSubmit(this.handleSendComment)} />
            </Box>
        )
    }
}

export default reduxForm({ Field: 'comment' })(EventDetailedChatForm);
