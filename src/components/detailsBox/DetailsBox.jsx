import React, { useEffect } from 'react';
import detailImage from '../../images/detail-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';

import './styles.scss';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { useStateContext } from '../../context/StateContext';

const DetailsBox = ({details}) => {
  
  const { addFavorites, active, checkActive } = useStateContext();
  const { air_date, episode, name, characters} = details?.episode;

  useEffect(() => {
    checkActive(details?.episode)
  }, [])

  return (
    <section>
      <div className="container">
        <div className="detailsContainer">
          <span onClick={() => addFavorites(details.episode)} className={active ? 'active' : ''}>
            <FontAwesomeIcon icon={faHeart} />
          </span>  
          <div className="imgBox">
            <img src={detailImage} alt="detail"/>
          </div>
          <div className="details">
            <div className="topDetails">
              <h3>Episódio: {episode}</h3>
              <h3>Disponivel: {format(new Date(air_date), "dd/MM/yyyy")}</h3>
            </div>  
            <div className="title">
              <h1>{name}</h1>
              <h3>Sinopse</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corrupti sit laudantium, 
                pariatur itaque magnam eos quam, dolorem qui aperiam eligendi reiciendis minima deserunt 
                voluptatum? Fugit voluptas hic dolorum labore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aspernatur vitae distinctio
                sit exercitationem doloribus, sunt ex ab molestiae omnis repudiandae numquam sequi illum eveniet
                dolore possimus placeat quasi libero!
              </p>
            </div>
          </div>
        </div>
        <div className="charactersContainer">
            <h3>Personagens que participaram deste epsódio</h3>
            <div className="charactersCards">
              {characters.map((person) => (
                <div className="character">
                  <img src={person.image} alt="person"/>
                  <p>Nome:<span>{person.name}</span></p>
                  <p>Espécie:<span>{person.species}</span></p>
                  <p>Estado:<span>{person.status}</span></p>
                </div>
              ))}
            </div>
          </div>  
      </div>
    </section>  
  )
}

export default DetailsBox;