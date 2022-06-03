import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MovieCard({movie}) {
    return (
        <div className="Card">
            <Card >
                <Card.Img variant="top" className="img" src={movie.posterUrl} />
                <Card.Body >
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.description}
                    </Card.Text>
                    <p>{"★".repeat(movie.rate)}{"☆".repeat(5 - movie.rate)}</p>
                    <Link to={`/Movie/${movie.id}`}><Button  variant="outline-success"> Check it out</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}
export default MovieCard;