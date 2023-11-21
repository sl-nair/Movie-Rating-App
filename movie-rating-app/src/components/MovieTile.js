import React, { useEffect, useState } from 'react';
import '../App.css';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

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
    const [starValue, setStarValue] = useState(0);

    useEffect(() => {
        // console.log("props to tile:")
        // console.log(props)
        setMovie(props.movie);
    }, [props]);

    const handleOpen = () => setModalState(true);
    const handleClose = () => setModalState(false);

    return (
        <Container maxWidth="sm">
            {typeof movie === 'undefined'
                ? <div>Loading...</div>
                : <div className='tile-box'>Title: {movie.title}, rating: {movie.rating}
                    <StarIcon /> Based on {movie.rating_count} reviews
                    <Button variant="contained" onClick={() => handleOpen()}>Rate</Button>
                    <Modal
                        open={modalState}
                        onClose={handleClose}
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Rate the movie "{movie.title}" out of 5 stars:
                            </Typography>
                            <Rating
                                name="simple-controlled"
                                value={starValue}
                                onChange={(event, newValue) => {
                                    setStarValue(newValue);
                                }}
                            />
                        </Box>
                    </Modal>
                </div>
            }
        </Container>
    )
}

export default MovieTile;