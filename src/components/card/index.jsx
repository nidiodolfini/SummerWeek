import './card.css'
import { useContext } from 'react'
import { Button, Card } from 'react-bootstrap';
import { FavoritesContext } from '../../providers/favorites';

export default function MovieCard(props) {

    const { favorites, setFavorites } = useContext(FavoritesContext)

    function favoriteHandler() {

        let movie = props.movie

        movie.id = favorites[favorites.length - 1].id + 1

        setFavorites(favorites => [...favorites, props.movie])

    }

    return (
        <Card className='card'>
            <span className={`material-icons-outlined favorite ${ props.favorited ? 'favorited' : '' }`} onClick={() => favoriteHandler()}>star</span>
            <Card.Img variant="top" className='preview' src={ props.movie.urlImg } />
            <Card.Body>
                <Card.Title>{ props.movie.titulo }</Card.Title>
                <Card.Text>
                    { props.movie.descricao }
                </Card.Text>
                <Button variant="primary" onClick={() => props.openDetails(props.movie)}>Detalhes</Button>
            </Card.Body>
        </Card>
    )

}