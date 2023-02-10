import { FormControlLabel, Radio, } from '@mui/material'

export function MuiRadio({ label, input, name }) {

    return (
        <FormControlLabel {...input} control={<Radio />} label={label} />
    )
}