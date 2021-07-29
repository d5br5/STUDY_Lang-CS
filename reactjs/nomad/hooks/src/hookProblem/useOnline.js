import { useState, useEffect } from "react";

const useOnline = () => {
    const [isOnLine, setIsOnLine] = useState(false);
    const online = window.navigator.onLine;
    useEffect(() => {
        setIsOnLine(online);
    }, [online]);
    return isOnLine;
};

export default useOnline;
