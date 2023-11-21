import React, { useEffect, useState } from 'react';
import { ref, onValue } from "firebase/database";
import database from '../firebaseSetup.mjs';
import MovieTile from './MovieTile.js';

function MovieList() {
    const [movieList, setMovieList] = useState();

    useEffect(() => {
        const movieListRef = ref(database, 'movies/');

        onValue(movieListRef, (snapshot) => {
            const data = snapshot.val();
            if (!!data) {
                // console.log('yuh');
                // console.log(data);
                setMovieList(data);
                // console.log(movieList[0].title);
            } else {
                console.log('Data not found');
            }
        }, {
            onlyOnce: true
        });


    }, []);

    const getList = () => {
        console.log("mobie list: ")
        console.log(movieList.movies)

        const tiles = [];
        movieList.movies.forEach(movie => {
            tiles.push(<MovieTile movie={movie} />)
        });
        return (
            <div>
                {tiles}
            </div>
        )
    }

    return (
        <div>
            MovieTile
            {typeof movieList === 'undefined'
                ? <div>
                    loading...
                </div>
                : getList()
            }
        </div>
    )
}

export default MovieList;