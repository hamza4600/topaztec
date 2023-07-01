// local storage hook
// https://usehooks.com/useLocalStorage/

import { useCallback, useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
    
    const readValue = useCallback(() => {
        if (typeof window === "undefined") {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.warn(`Error reading localStorage key “${key}”:`, error);
            return initialValue;
        }
    }, [key, initialValue]);

    const [storedValue, setStoredValue] = useState();

    useEffect(() => {
        setStoredValue(readValue());
    }, []);

    const setValue = (value) => {
        if (typeof window == "undefined") {
            console.warn(
                `Tried setting localStorage key “${key}” even though environment is not a client`
            );
        }

        try {
            const newValue =
                value instanceof Function ? value(storedValue) : value;

            setStoredValue(newValue);
            // update local storage
            window?.localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
            console.warn(`Error setting localStorage key “${key}”:`, error);
        }
    };

    return [storedValue, setValue];
}
