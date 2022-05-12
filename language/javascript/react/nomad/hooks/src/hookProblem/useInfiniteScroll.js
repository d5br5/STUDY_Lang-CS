import React, {useState, useEffect} from "react";
import {getMovies} from "./api";

const Movies = () => {
    const [nowMovies, setNowMovies] = useState([]);
    const [nowPage, setNowPage] = useState(1);

    const gettingMovies = async (page) => {
        const {
            data: {
                data: {movies}
            }
        } = await getMovies(page);
        setNowMovies([...nowMovies, ...movies]);
    };

    const infiniteScroll = () => {
        let scrollHeight = Math.max(
            document.documentElement.scrollHeight,
            document.body.scrollHeight
        );
        let scrollTop = Math.max(
            document.documentElement.scrollTop,
            document.body.scrollTop
        );
        let clientHeight = document.documentElement.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight) {
            setNowPage(nowPage + 1);
        }
    };

    useEffect(() => {
        gettingMovies(nowPage);
    }, [nowPage]);

    useEffect(() => {
        window.addEventListener("scroll", infiniteScroll);
    });

    return (
        <>
            <h1>Infinite Movies / Page {nowPage}</h1>
            {nowMovies.map((movie, index) => (
                <h3 key={index}>
                    #{index + 1} {movie.title}
                </h3>
            ))}
        </>
    );
};
export default Movies;
