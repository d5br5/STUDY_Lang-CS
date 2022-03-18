import axios from "axios";
const BASE_URL = "https://yts.mx/api/v2";

export const getMovies = async () =>{
    const {data:{data:{movies}}} = await axios.get(`${BASE_URL}/list_movies.json`);
    console.log(movies);
    return movies;
}

export const getMovie = async id=>{
    const {data: {data: {movie}}} = await axios.get(`${BASE_URL}/movie_details.json?movie_id=${id}`)
    console.log(movie);
    return movie;
}

export const getSuggestions = async id =>{
    const {data : {data : {movies}}} = await axios.get(`${BASE_URL}/movie_suggestions.json?movie_id=${id}`);
    return movies;
}