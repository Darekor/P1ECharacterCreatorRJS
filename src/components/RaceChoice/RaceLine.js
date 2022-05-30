import React from 'react'

function RaceLine({race,raceChoice}) {
  return (
    <div onClick={()=>raceChoice(race)}>{race.name}</div>
  )
}

export default RaceLine