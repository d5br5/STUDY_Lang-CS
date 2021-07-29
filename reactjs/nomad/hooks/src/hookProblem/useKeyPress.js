import { useState } from "react";

const useKeyPress = (target) => {
    const [pressed, setIsPressed] = useState(false);
    document.addEventListener("keydown", (e) => {
        if (target === e.key) setIsPressed(true);
    });
    document.addEventListener("keyup", (e) => {
        if (target === e.key) setIsPressed(false);
    });

    return pressed;
};

export default useKeyPress;
