import { FormControl, FormHelperText } from '@mui/material'
import React from 'react'

const TextArea = ({ input, width, type, rows, placeholder, label, meta: { touched, error } }) => {
    return (

        <FormControl margin='dense' fullWidth>
            <label style={{marginBottom: '0.5rem'}} htmlFor='textarea'>{label}</label>
            <textarea id='textarea' rows={rows} className='form-control' {...input} placeholder={placeholder} type={type}></textarea>
            {touched && error && <FormHelperText error>{error}</FormHelperText>}
        </FormControl>
    )
}

export default TextArea