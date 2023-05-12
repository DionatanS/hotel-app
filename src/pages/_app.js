import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import { GlobalStyle } from "../styles/GlobalStyle"
import { UserProvider } from "../contexts/UserContext";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <UserProvider>
            <GlobalStyle />
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </UserProvider>                
        </>
    )
}

export default MyApp;
