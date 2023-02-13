import * as React from 'react';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function MultipleSelectInput({ input, width, placeholder, label, dataSource }) {

    const [value, setValue] = React.useState([])
    return (
        <div>
            <FormControl fullWidth margin='dense'>
                <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={input.value || value}
                    onChange={(e) => {
                        const {
                            target: { value },
                        } = e;
                        setValue(
                            typeof value === 'string' ? value.split(',') : value,
                        );
                        input.onChange(value)
                    }}
                    input={<OutlinedInput id="select-multiple-chip" label={label} />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {dataSource && dataSource.length > 0 ? dataSource.map((e, i) => (
                        <MenuItem
                            key={i}
                            value={e['value']}
                        >
                            {e['option']}
                        </MenuItem>
                    )) : null}
                </Select>
                {/* {touched && error && <FormHelperText error>{error}</FormHelperText>} */}
            </FormControl>
        </div>
    );
}