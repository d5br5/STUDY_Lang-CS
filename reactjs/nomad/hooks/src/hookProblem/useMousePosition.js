import { useState } from "react";

const useMousePosition = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    window.addEventListener("mousemove", (e) => {
        setX(e.clientX);
        setY(e.clientY);
    });
    return { x, y };
};

export default useMousePosition;
