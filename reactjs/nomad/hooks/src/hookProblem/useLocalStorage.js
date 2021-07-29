import { useState, useEffect } from "react";

const useLocalStorage = (name, initialValue) => {
    useEffect(() => {
        localStorage.setItem(name, initialValue);
    }, []);

    const [currentLS, setCurrentLS] = useState(initialValue);

    const setLs = (value) => {
        localStorage.setItem(name, value);
        setCurrentLS(value);
    };

    return [currentLS, setLs];
};

export default useLocalStorage;
