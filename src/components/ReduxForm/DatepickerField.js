import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerField({ input: { value, onBlur, onChange }, width, type, label, multiple, dataSource, meta: { touched, error }, ...rest }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label={label}
                value={value ? Object.prototype.toString.call(value) !== '[object Date]' ? value.toDate() : value : null}
                onChange={(value) => {
                    onChange(value.$d);
                }}
                renderInput={(params) => <TextField {...params}
                    margin='dense'
                    fullWidth
                    onBlur={onBlur}
                    error={touched && !!error}
                    helperText={touched && error ? error : null} />}
            />
        </LocalizationProvider>
    );
}