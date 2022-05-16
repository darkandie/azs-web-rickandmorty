import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useQuery } from "@apollo/client";
import { INFO_EPISODES } from "../../querys/index";

import './styles.scss';
import Card from '../card/Card';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const List = () => {
  
  const { loading, data } = useQuery(INFO_EPISODES);
  const episodes = data?.episodes?.results;

  const [ episodesList, setepisodesList ] = useState([]);
  const [ searchItem, setSearchItem ] = useState('');

  useEffect(() => {
    const filteredData = episodes?.filter((item) => item?.name.toLowerCase().includes(searchItem.toLowerCase()))
    setepisodesList(filteredData);
  }, [ searchItem, episodes ])
  
  if (loading) {
    return <div className="loading"><p >Loading...</p></div>;
  }

  return (
    <div className="list">
      <div className="listContainer">
        <div className="searchItem">
          <h1>Episódios</h1>
          <div className="search">
            <input 
              type="text"
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>  
        <section className="cardContainer">
          {episodesList?.map((episode) => (
            <Link to={`/episode/${episode.id}`} key={episode.id} >
              <Card episodes={episode} />
            </Link>  
          ))}
        </section>
      </div>  
    </div>  
  );
}

export default List;