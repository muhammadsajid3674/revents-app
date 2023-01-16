import { createTheme, TextField } from "@mui/material";
import { ThemeProvider } from "styled-components";

const theme = createTheme({
    palette: {
        custom: {
            light: '#0c4b74',
            main: '#0c4b74',
            dark: '#0c4b74',
            contrastText: '#fff',
        }
    },
});

export default function MuiDatePicker(props) {
    const { label, variant, onChange, name, id, color, helperText, error, disabled, required, min, max, type, value, placeholder } = props;
    return <>
        <ThemeProvider theme={theme}>
            <TextField
                variant={variant ?? 'standard'}
                fullWidth
                value={value}
                name={name}
                id={id}
                label={label}
                error={error}
                type={type}
                // defaultValue="YYYY-MM-DD"
                onChange={onChange}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </ThemeProvider>
    </>
}