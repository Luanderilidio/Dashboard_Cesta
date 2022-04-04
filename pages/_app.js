import { createGlobalStyle, ThemeProvider } from "styled-components";
import { PayProvider } from "../provider/pagamento";
import "@fontsource/roboto/500.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: "#0070F3",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <PayProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </PayProvider>
    </>
  );
}

export default MyApp;
