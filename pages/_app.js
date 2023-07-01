import { GlobalStyles, themes } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import Navbar from "@/components/navbar";
import FooterComponent from "@/components/footer";
// Font
import { Poppins } from "@next/font/google";
import useLocalStorage from "@/hooks/uselocalStorage";

export default function App({ Component, pageProps }) {
    
    const [theme, setValue] = useLocalStorage("theme", "light");

    const storedValue = theme;
    
    return (
        <ThemeProvider theme={
            storedValue === "light" ? themes.dark : themes.light
        }>
            <GlobalStyles />
            <div className="page-container">
                <Navbar />
                <main>
                    <Component {...pageProps} />
                </main>
                <FooterComponent />
              
                <button 
                style={{
                    position: "fixed",
                    bottom: "10px",
                    right: "10px",
                    zIndex: "100",
                }}
                onClick={() => {
                    theme === "light"
                        ? setValue("dark")
                        : setValue("light");
                }}
            >
                {theme === "light" ? "Dark" : "Light"}
            </button>
            </div>
        </ThemeProvider>
    );
}
