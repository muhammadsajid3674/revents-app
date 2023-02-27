import { FormControl, FormHelperText } from '@mui/material'
import React from 'react'

const TextArea = ({ input, width, type, rows, placeholder, label, meta: { touched, error } }) => {
    return (

        <FormControl margin='dense' fullWidth sx={{ marginBottom: '0.5rem' }}>
            <label htmlFor='textarea'>{label}</label>
            <textarea id='textarea' rows={4} className='form-control' {...input} placeholder={placeholder} type={type}></textarea>
            {touched && error && <FormHelperText error>{error}</FormHelperText>}
        </FormControl>
    )
}

export default TextArea