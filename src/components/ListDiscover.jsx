import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const List = () => {

    const { movieId } = useParams();
    const [movies, setMovies] = useState([]);
    const apiURL = 'https://api.themoviedb.org/3/';
    const apiDiscoverMovie = 'discover/movie/';
     
    useEffect(() => {
        const apiList = apiURL  + apiDiscoverMovie;
        const request = fetch(apiList, {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTQ3YWRjZGZmNjZjNTgwZmI5NDQ0MGQxMjIyNWY2NSIsInN1YiI6IjYyYzBhYTlhNjNkNzEzMDI2YzJmMDY1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z2BhWQgxk4ZZryLHtOc4J_irKGI6_aMdYJV7d81-qI4",
                "Content-Type": "application/json;charset=utf-8",
            },
        });

        const response = request.then(response => response.json());
        response.then(data => {
            setMovies(data.results);
        });
    }, [movieId]);
    return (
        <ul>
            {<h3 >Pelis Discover</h3>}
            {movies.map((movie) =>
                <li key={movie.id} movie={movie}>
                    <h3>
                        <strong>Title:</strong> {movie.title}
                  </h3>
                    <img
                        width={345}
                        height={345}
                        src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
                        alt={movie.title}
                    />
            
                    <p>
                        <strong>Release Date: </strong>
                        {movie.release_date}
                    </p>
                    <p>
                        <strong>Language: </strong>
                       { movie.original_language === 'en' ? 'English': 'other language'}
                    </p>
                    <p>
                        <strong>Description: </strong>
                        {movie.overview}
                    </p>
                    <p>
                        <strong>Vote Average: </strong>
                        {movie.vote_average}
                    </p>
                      <p>
                         <strong>Genres:          {
                                        movie.genres && movie.genres.slice(0, 5).map((genre, i) => (
                                            <span key={i}>{genre.name}</span>
                                        ))
                                    }
                                    </strong>
                    </p>                 
                </li>
            )}
        </ul>

    )
}

export default List;