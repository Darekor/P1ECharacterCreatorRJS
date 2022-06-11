import React from 'react'
import RaceLine from './RaceLine'

import { ListGroup,Container } from 'react-bootstrap'

function RaceChoice({races,raceChoice}) {
  return (
    <>
      <h4>Choose your race</h4>
        <ListGroup>
        {races.map((race)=>
        (<RaceLine key={race} race={race} raceChoice={raceChoice} />))}
        </ListGroup>
    </>
  )
}

export default RaceChoice