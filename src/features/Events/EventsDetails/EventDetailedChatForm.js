import { Box } from '@mui/material';
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import { ThemeBtnPri } from '../../../components/button/ThemeBtn';
import TextArea from '../../../components/ReduxForm/TextArea';

class EventDetailedChatForm extends Component {

    handleSendComment = (comment) => {
        const {addEventComment, eventId, reset} = this.props;
        addEventComment(eventId, comment)
        reset()
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

export default reduxForm({ form: 'comment' })(EventDetailedChatForm);
