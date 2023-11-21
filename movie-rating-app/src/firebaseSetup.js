import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCwIy8AzW7CWgVd8CgWPhuer6wyPtBnDeA",
    authDomain: "movie-rating-app-f0c4c.firebaseapp.com",
    databaseURL: "https://movie-rating-app-f0c4c-default-rtdb.firebaseio.com",
    projectId: "movie-rating-app-f0c4c",
    storageBucket: "movie-rating-app-f0c4c.appspot.com",
    messagingSenderId: "1082524730471",
    appId: "1:1082524730471:web:09b47763b7deee011480c2",
    measurementId: "G-KYPL57R41P"
};
// Initialize firebase app.
const app = initializeApp(firebaseConfig);
// Initialize firebase database and get the reference of firebase database object.
const database = getDatabase(app);
export default database;