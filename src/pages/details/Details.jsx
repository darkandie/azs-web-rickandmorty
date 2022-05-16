import React from 'react';
import { useLocation } from 'react-router';
import { useQuery } from "@apollo/client";
import { INFO_EPISODE } from "../../querys/index";
import Navbar from '../../components/navbar/Navbar';
import DetailsBox from '../../components/detailsBox/DetailsBox';

const Details = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2]

  const { loading, data } = useQuery(INFO_EPISODE,{ variables: {id} });

  if (loading) {
    return <div className="loading"><p >Loading...</p></div>;
  }

  return (
    <>
      <Navbar />
      <DetailsBox details={data}/>
    </>  
  )
}

export default Details;