import database from "../firebaseSetup.mjs";
// const database = require("../firebaseSetup.js");
import { ref, set, update } from "firebase/database";
// const { ref, set } = require("firebase/database");

// Setting movie list data.
const data = {
    movies: [
        {
            'title': 'Interstellar',
            'rating_count': 2000,
            'rating': 4.9
        },
        {
            'title': 'Frozen',
            'rating_count': 2344,
            'rating': 2.2
        },
        {
            'title': 'Toy Story',
            'rating_count': 5893,
            'rating': 3.5
        },
        {
            'title': 'Shrek',
            'rating_count': 4503,
            'rating': 4.8
        },
    ],
}

const updates = {};
// updates['cart/' + cartId + '/cartId'] = updatedCartId;
updates['movies/' + '/movies'] = { Frozen: 'updated product', rating : 5.0, rating_count: 1000000 };

set(ref(database, 'movies/'), data).then(() => {
    // Success.
}).catch((error) => {
    console.log(error);
});

update(ref(database), updates).then(() => {
    // Success
}).catch((error) => {
    console.log(error)
})