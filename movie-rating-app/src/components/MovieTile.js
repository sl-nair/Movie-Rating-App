import React, { useEffect, useState } from 'react';
import '../App.css';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { ref, update } from "firebase/database";
import database from "../firebaseSetup.mjs";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function MovieTile(props) {
    const [movie, setMovie] = useState();
    const [modalState, setModalState] = useState();
    const [loading, setLoading] = useState(false);
    const [snackBar, setSnackBar] = useState(false);


    // const [starValue, setStarValue] = useState(0);

    useEffect(() => {
        // console.log("props to tile:")
        // console.log(props)
        setMovie(props.movie);
    }, [props]);

    const handleOpen = () => setModalState(true);
    const handleClose = () => setModalState(false);


    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const handleSnackBarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackBar(false);
    };
    const updateRate = (value) => {
        const updatedRating = (movie.rating * movie.rating_count + value) / (movie.rating_count + 1)
        const newMovie = {
            'id': movie.id,
            'title': movie.title,
            'description': movie.description,
            'rating_count': movie.rating_count + 1,
            'rating': updatedRating
        }
        const updates = {};
        updates[`movies/movies/${movie.id}`] = newMovie;
        update(ref(database), updates).then(() => {
            // Success
            setLoading(false)
            setModalState(false)
            setSnackBar(true)
        }).catch((error) => {
            console.log(error)
        })

        console.log(updatedRating)
        console.log('yuh')
    }

    return (
        <Container maxWidth="md">
            {typeof movie === 'undefined'
                ? <div>Loading...</div>
                : <div className='tile-box'>
                    <Container className='top-row'>
                        <Container className='title-reviews'>
                            <h2 className='title'>
                                {movie.title}            
                            </h2>
                            Rating: {Math.round(movie.rating * 10) / 10}
                            <StarIcon /> Based on {movie.rating_count} reviews
                        </Container>
                        <Button variant="contained" onClick={() => handleOpen()}>Rate</Button>
                    </Container>
                    <Container className='description'>
                        {movie.description}
                    </Container>
                    <Modal
                        open={modalState}
                        onClose={handleClose}
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Rate the movie "{movie.title}" out of 5 stars:
                            </Typography>
                            <Fade
                                in={!loading}
                                // style={{
                                //     transitionDelay: loading ? '800ms' : '0ms',
                                // }}
                                unmountOnExit
                            >
                                <Rating
                                    name="simple-controlled"
                                    value={0}
                                    hidden={loading}
                                    onChange={(event, newValue) => {
                                        console.log("he set the value: " + newValue)
                                        updateRate(newValue)
                                        setLoading(true)
                                    }}
                                />
                            </Fade>
                            <Fade
                                in={loading}
                                // style={{
                                //     transitionDelay: loading ? '800ms' : '0ms',
                                // }}
                                unmountOnExit
                            >
                                <CircularProgress
                                    hidden={!loading}
                                />

                            </Fade>
                        </Box>
                    </Modal>
                </div>
            }
            <Snackbar open={snackBar} autoHideDuration={6000} onClose={handleSnackBarClose}>
                <Alert onClose={handleSnackBarClose} severity="success" sx={{ width: '100%' }}>
                    Thanks for rating!
                </Alert>
            </Snackbar>
        </Container>
    )
}

export default MovieTile;