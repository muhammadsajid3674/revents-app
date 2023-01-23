import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PlacesAutocomplete from 'react-places-autocomplete';

export default function PlacesInput({ label, input: { value, onBlur, onChange }, options, placeholder, meta: { touched, error } }) {
    return (
        <PlacesAutocomplete value={value} onChange={onChange} searchOptions={options} >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={suggestions}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField
                        {...params}
                        {...getInputProps({ placeholder, onBlur })}
                        label={label}
                        helperText={loading && 'Loading...'}
                    />}
                />
            )}
        </PlacesAutocomplete>
    );
}
