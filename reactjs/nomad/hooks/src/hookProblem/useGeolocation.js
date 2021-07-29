import { useState } from "react";

const useGeolocation = () => {
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [error, setError] = useState("null");

    const handleSuccess = ({ coords: { longitude, latitude } }) => {
        setLat(latitude);
        setLong(longitude);
    };

    const handleError = (err) => {
        setError(`ERROR(${err.code}): ${err.message}`);
    };

    const options = {
        enableHighAccuracy: true,
        timeout: 10000
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);

    return { coords: { lat, long }, error };
};

export default useGeolocation;
