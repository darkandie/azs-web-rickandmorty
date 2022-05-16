import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [ favorites, setFavorites ] = useState([]);
  const [ active, setActive ] = useState('');

  const checkActive = (episode) => {
    const check = favorites.find((item) => item.id === episode.id);
    if(check) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  const addFavorites = (episode) => {
    const checkFavorites = favorites.find((item) => item.id === episode.id);

    if(checkFavorites) {
      favorites.map((item) => {
        if(item.id === episode.id)  {
          let index = favorites.indexOf(item)
          const newFavorites = [...favorites]
          newFavorites.splice(index, 1)
          setFavorites(newFavorites);
          setActive(false);
          toast.success('Episódio Removido com sucesso!')
        }
      })
    } else {
      setFavorites([...favorites, {...episode}]);
      setActive(true);
      toast.success('Episódio favoritado com sucesso!')
    }
  }

  return (
    <Context.Provider
      value={{
        favorites,
        active,
        addFavorites,
        checkActive,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);

