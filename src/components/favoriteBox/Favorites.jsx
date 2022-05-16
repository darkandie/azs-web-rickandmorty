import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { useStateContext } from '../../context/StateContext';
import Card from '../card/Card';

const FavoriteBox = () => {

  const { favorites } = useStateContext();

  return (
    <div className="fav">
      <div className="favContainer">
        <h1>Episódios favoritos <span><FontAwesomeIcon icon={faHeart} /></span></h1>
        {favorites.length === 0 ?
        (
          <div className="favMessage">
            <h2>Nenhum episódio favoritado!</h2>
          </div>
        ) : (
          <div className="favEpisodes">
            <div className="cardContainer">
              {favorites.map((episode) => (
                <Link to={`/episode/${episode.id}`} key={episode.id} >
                  <Card episodes={episode} />
                </Link>  
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FavoriteBox;