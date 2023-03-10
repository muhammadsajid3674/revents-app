import { FormControl, FormHelperText, OutlinedInput } from '@mui/material'
import React from 'react'

const TextInput = ({ input, width, type, placeholder, label, meta: { touched, error } }) => {
    return (
        <FormControl fullWidth margin='dense'>
            <OutlinedInput error={touched && !!error} {...input} placeholder={placeholder} type={type}  />
            {touched && error && <FormHelperText error>{error}</FormHelperText>}
        </FormControl>
    )
}

export default TextInput