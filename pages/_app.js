import { GlobalStyles, themes } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import Navbar from "@/components/navbar";
import FooterComponent from "@/components/footer";
// Font
import { Poppins } from "@next/font/google";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={themes.light}>
            <GlobalStyles />
            <div className="page-container">
                <Navbar />
                <main>
                    <Component {...pageProps} />
                </main>
                <FooterComponent />
            </div>
        </ThemeProvider>
    );
}
