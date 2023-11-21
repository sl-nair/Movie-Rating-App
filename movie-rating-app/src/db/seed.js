import database from "../firebaseSetup.js";
import { ref, set } from "firebase/database";

// Setting movie list data.
const data = {
    movies: [
        {
            'title': 'Interstellar',
            'rating': 99
        },
        {
            'title': 'Frozen',
            'rating': 80
        },
        {
            'title': 'Toy Story',
            'rating': 77
        },
        {
            'title': 'Shrek',
            'rating': 89
        },
    ],
}
set(ref(database, 'movies/'), data).then(() => {
    // Success.
}).catch((error) => {
    console.log(error);
});