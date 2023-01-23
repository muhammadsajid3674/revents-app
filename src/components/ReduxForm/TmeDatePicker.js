import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function DateTimePickerField({ input, width, type, label, multiple, dataSource, meta: { touched, error }, ...rest }) {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                renderInput={(props) => <TextField {...props}
                    value={input.value || null}
                    onBlur={input.onBlur}
                    error={touched && !!error}
                    helperText={touched && error ? error : null}
                />}
                label="DateTimePicker"
                value={input.value || null}
                onChange={(newDate) => {
                    let time = newDate.$d.toLocaleTimeString('en-US');
                    let date = newDate.$d.toLocaleDateString();
                    input.onChange(date + ' ' + time);
                }}
            />
        </LocalizationProvider>
    );
}