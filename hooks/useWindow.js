import { useState, useEffect } from "react";
// get size of window

const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
};

const useWindow = () => {
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });
    
    useEffect(() => {
        // delay 100ms to prevent too many rerenders
        const handleResize = debounce(() => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }, 100);

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return { size };
}

export default useWindow;