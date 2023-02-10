import { FormControlLabel, Radio, } from '@mui/material'

export function MuiRadio({ label, value, input }) {

    return (
        <FormControlLabel {...input} value={value} control={<Radio />} label={label} />
    )
}