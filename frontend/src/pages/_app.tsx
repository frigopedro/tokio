import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import GlobalStyle from "../styles/globals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <ToastContainer
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={1}
        pauseOnFocusLoss={false}
      />
      <GlobalStyle />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
