import { useState } from "react";

const useFavicon = (initialFaviconUrl) => {
    const [favicon, setFavicon] = useState(initialFaviconUrl);
    return setFavicon;
};

export default useFavicon;
