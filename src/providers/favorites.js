import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const FavoritesContext = React.createContext([])

export const FavoritesProvider = props => {

    const [favorites, setFavorites] = useLocalStorage('favoritesMovies', [])

    return (
        <FavoritesContext.Provider value={{favorites, setFavorites}}>
            { props.children }
        </FavoritesContext.Provider>
    )

}