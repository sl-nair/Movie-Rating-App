import database from "../firebaseSetup.mjs";
// const database = require("../firebaseSetup.js");
import { ref, set, update } from "firebase/database";
// const { ref, set } = require("firebase/database");

// Setting movie list data.
const data = {
    movies: [
        {
            'id': 0,
            'title': 'Interstellar',
            'rating_count': 20,
            'rating': 4.9400001
        },
        {
            'id': 1,
            'title': 'Frozen',
            'rating_count': 23,
            'rating': 2.21000932
        },
        {
            'id': 2,
            'title': 'Toy Story',
            'rating_count': 58,
            'rating': 3.5889390
        },
        {
            'id': 3,
            'title': 'Shrek',
            'rating_count': 45,
            'rating': 4.800009909
        },
    ],
}

const updates = {};
// updates['cart/' + cartId + '/cartId'] = updatedCartId;
// updates['movies/' + '/movies'] = { Frozen: 'updated product', rating : 5.0, rating_count: 1000000 };

set(ref(database, 'movies/'), data).then(() => {
    // Success.
}).catch((error) => {
    console.log(error);
});

// const newMovie = {
//     'id': 3,
//     'title': 'Shrek',
//     'rating_count': 4503,
//     'rating': 1.0
// }
// updates['movies/movies/3'] = newMovie;
// update(ref(database), updates).then(() => {
//     // Success
// }).catch((error) => {
//     console.log(error)
// })