import { GlobalStyles, themes } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import Navbar from "@/components/navbar";
import FooterComponent from "@/components/footer";
import useLocalStorage from "@/hooks/uselocalStorage";
import ThemeButton from "@/components/themeButton";
// Font
import { Poppins } from "@next/font/google";

export default function App({ Component, pageProps }) {

    const [theme, setValue] = useLocalStorage("theme", "light");

    return (
        <ThemeProvider theme={theme === "light" ? themes.dark : themes.light}>
            <GlobalStyles />
            <div className="page-container">
                <Navbar />
                <main>
                    <Component {...pageProps} />
                </main>
                <FooterComponent />

                <ThemeButton
                    theme={theme}
                    toggleTheme={() => {
                        theme === "light"
                            ? setValue("dark")
                            : setValue("light");
                    }}
                />
            </div>
        </ThemeProvider>
    );
}
