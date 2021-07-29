import { useState } from "react";

const useLockScroll = () => {
    const [isLocked, setIsLocked] = useState(false);

    const lockScroll = () => {
        setIsLocked(true);
        document.body.style.overflow = "";
    };
    const unlockScroll = () => {
        setIsLocked(false);
        document.body.style.overflow = "scrollY";
    };
    return [isLocked, { lockScroll, unlockScroll }];
};

export default useLockScroll;
