
import {AuthenticationContainer} from "./components/AuthenticationContainer.tsx";
import {Box, CssBaseline, ThemeProvider, Typography} from "@mui/material";
import {theme} from "./theme/theme.ts";

function App() {
  // const [count, setCount] = useState(0)

  return (
      <Box>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthenticationContainer>
        <Typography>
            The sign up form should be here
        </Typography>
        </AuthenticationContainer>
    </ThemeProvider>
      </Box>
  )
}

export default App
