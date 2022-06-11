import React from 'react'
import { ListGroupItem } from 'react-bootstrap';



function RaceLine({race,raceChoice}) {
  const getRaceData = async(race) =>{
    const response = await fetch('https://ktor-p1eapi.herokuapp.com/race/'+race)
    .then(response => response.json());
    raceChoice(response);
  }

  return (
    <ListGroupItem action onClick={()=>getRaceData(race,raceChoice)}>{race}</ListGroupItem>
  )
}

export default RaceLine