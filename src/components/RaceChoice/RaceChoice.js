import React from 'react'
import RaceLine from './RaceLine'

function RaceChoice({races,raceChoice}) {
  return (
    <div>
      <h4>Choose your race</h4>
        {races.map((race)=>
        (<RaceLine key={race.name} race={race} raceChoice={raceChoice} />))
        }
    </div>
  )
}

export default RaceChoice