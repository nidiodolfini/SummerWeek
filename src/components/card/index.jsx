import './card.css'
import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { FavoritesContext } from '../../providers/favorites';

export default function MovieCard(props) {

    const { favorites, setFavorites } = React.useContext(FavoritesContext)

    function favoriteHandler() {

        if(props.favorited) {

            const index = favorites.findIndex(favorite => favorite.id === props.movie.id)
            setFavorites(favorites => favorites.splice(index , 1))
            console.log(index)

        } else {

            setFavorites(favorites => [...favorites, props.movie])
            // console.log(favorites)

        }
    }

    return (
        <Card className='card'>
            <span className={`material-icons-outlined favorite ${ props.favorited ? 'favorited' : '' }`} onClick={() => favoriteHandler()}>star</span>
            <Card.Img variant="top" className='preview' src={ props.movie.image } />
            <Card.Body>
                <Card.Title>{ props.movie.title }</Card.Title>
                <Card.Text>
                    { props.movie.description }
                </Card.Text>
                <Button variant="primary" onClick={() => props.openDetails(props.movie)}>Detalhes</Button>
            </Card.Body>
        </Card>
    )

}