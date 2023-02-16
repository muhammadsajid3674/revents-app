import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function DateTimePickerField({ input: { value, onBlur, onChange }, width, type, label, multiple, dataSource, meta: { touched, error }, ...rest }) {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                label={label}
                value={value ? Object.prototype.toString.call(value) !== '[object Date]' ? value.toDate() : value : null}
                onChange={(newDate) => {
                    onChange(newDate.$d);
                }}
                renderInput={(props) => <TextField {...props}
                    margin='dense'
                    fullWidth
                    onBlur={onBlur}
                    error={touched && !!error}
                    helperText={touched && error ? error : null}
                />}
            />
        </LocalizationProvider>
    );
}