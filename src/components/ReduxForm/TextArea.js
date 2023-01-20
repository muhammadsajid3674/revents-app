import { FormControl, FormHelperText } from '@mui/material'
import React from 'react'

const TextArea = ({ input, width, type, rows, placeholder, label, meta: { touched, error } }) => {
    return (

        <FormControl>
            <textarea rows={rows} className='form-control' {...input} placeholder={placeholder} type={type}></textarea>
            {touched && error && <FormHelperText error>{error}</FormHelperText>}
        </FormControl>
    )
}

export default TextArea