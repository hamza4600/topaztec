import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
    
const ThemeButton = ({ theme, toggleTheme }) => {
    return (
        <button
            className="theme-button"
            onClick={toggleTheme}
        >
            {theme === "light" ? (
                <MdOutlineLightMode size={30} color="white" />
            ) : (
                <MdOutlineDarkMode size={30} color="#7055DE" />
            )}
        </button>
    )
}

export default ThemeButton;