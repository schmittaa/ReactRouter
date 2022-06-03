import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MovieDescription({ Movies }) {
    const { id } = useParams();
    const movie = Movies.find(movie => movie.id == id);

    return (
        <div className='iframe'>
            <iframe
                width="853"
                height="480"
                src={movie.frameUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
            <div className="des">
                <h5 >{movie.title}</h5>
                <p>{movie.description}</p>
            </div>
            <Link to={`/`}>
          <Button style={{marginLeft:"40%"}} variant='outline-info'>Back to home</Button>
        </Link>
        </div>
    )
}

export default MovieDescription