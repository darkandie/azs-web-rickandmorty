import React from 'react';
import { useQuery } from "@apollo/client";
import { INFO_EPISODE } from "../../querys/index";
import { format } from 'date-fns';

import './styles.scss';
import thumb from '../../images/episode-thumb.jpeg';

const Card = ({episodes}) => {

  const { id, name, episode, air_date } = episodes;

  const { data } = useQuery(INFO_EPISODE,{ variables: {id} });

  return (
    <div className="card" key={id}>
      <div className="cardContainer">
        <div className="cards">
          <div className="imageContainer">
            <img src={thumb} alt="Avatar" />
          </div>
          <div className="description">
            <p>
              <b>Titulo:</b> {name}
            </p>
            <p>
              <b>Episódio:</b> {episode}
            </p>
            <p>
              <b>Foi ao ar dia:</b> {format(new Date(air_date), "dd/MM/yyyy")}
            </p>
            <p>
              <b>Personagens:</b> {data?.episode?.characters.length}
            </p>
          </div> 
        </div>  
      </div>
    </div>
  )
}

export default Card;