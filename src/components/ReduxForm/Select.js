import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const SelectInput = ({ input, width, type, placeholder, label, multiple, dataSource, meta: { touched, error } }) => {
  return (
    <FormControl fullWidth error={touched && !!error}>
      <InputLabel id="demo-simple-select-label" >{label}</InputLabel>
      <Select
        defaultValue=""
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={input.value || undefined}
        onChange={(e, data) => {
          input.onChange(data.props.value)
        }}
        label={label}
        placeholder={placeholder}
        onBlur={input.onBlur}
      >
        {dataSource && dataSource.length > 0 ? dataSource.map((e, i) => {
          return <MenuItem key={i} value={e['value']}>
            {e['option']}
          </MenuItem>
        }) : null}
      </Select>
      {touched && error && <FormHelperText error>{error}</FormHelperText>}
    </FormControl>
  )
}

export default SelectInput