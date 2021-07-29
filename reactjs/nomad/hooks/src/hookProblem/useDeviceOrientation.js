import { useState } from "react";

const useDeviceOrientation = () => {
    const [alpha, setAlpha] = useState(null);
    const [beta, setBeta] = useState(null);
    const [gamma, setGamma] = useState(null);

    window.addEventListener("deviceorientation", (e) => {
        setAlpha(e.alpha);
        setBeta(e.beta);
        setGamma(e.gamma);
    });

    return { alpha, beta, gamma };
};

export default useDeviceOrientation;
