import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import setDate from '../../config/common/HelperMethods/setDate';

export default function DatePickerField({ input, width, type, label, multiple, dataSource, meta: { touched, error }, ...rest }) {
    const [value, setValue] = React.useState(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label={label}
                value={input.value}
                onChange={(value) => {
                    input.onChange(setDate(value.$d))
                    setValue(value)
                }}
                renderInput={(params) => <TextField {...params}
                    value={input.value || null}
                    // onChange={(e, data) => input.onChange(data.value)}
                    onBlur={input.onBlur}
                    error={touched && !!error}
                    helperText={touched && error ? error : null} />}
            />
        </LocalizationProvider>
    );
}