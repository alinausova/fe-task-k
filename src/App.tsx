import {FormContainer} from "./components/FormContainer.tsx";
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./theme/theme.ts";
import {SignUpForm} from "./components/SignUpForm.tsx";

function App() {

    return (
        <Box>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <FormContainer>
                    <SignUpForm/>
                </FormContainer>
            </ThemeProvider>
        </Box>
    )
}

export default App
