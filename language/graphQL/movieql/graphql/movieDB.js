export let movies = [
    {
        id: 0,
        name: "Star Wars",
        score: 0.1
    },
    {
        id: 1,
        name: "Avengers",
        score: 8
    },
    {
        id: 2,
        name: "The God father",
        score: 99
    },
    {
        id: 3,
        name: "Logan",
        score: 2
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(a => a.id === id);
    return filteredMovies[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(a => a.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) =>{
    const newMovie = {
        id:`${movies[movies.length-1].id+1}`,name, score
    }
    movies = [...movies, newMovie];
    return newMovie;
}