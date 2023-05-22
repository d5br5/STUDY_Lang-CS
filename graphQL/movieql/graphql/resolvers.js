// import {getById, people} from "./peopleDB";
// import {movies, getMovies, getById, addMovie, deleteMovie} from "./movieDB";

// movieDB resolvers
// const resolvers = {
//     Query: {
//         movies: () => getMovies(),
//         movie: (_, {id}) => getById(id)
//     },
//     Mutation: {
//         addMovie: (_, {name, score}) => addMovie(name, score),
//         deleteMovie: (_, {id}) => deleteMovie(id)
//     }
// }

import {getMovie, getMovies, getSuggestions} from "./ytsDB";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        // moives : (_, {rating, limit}) => getMovies(limit, rating)
        movie : (_, {id})=> getMovie(id),
        suggestions:(_, {id}) => getSuggestions(id)
    }
}



export default resolvers