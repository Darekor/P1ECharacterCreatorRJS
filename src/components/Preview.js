import React from 'react'

import {Col, Container} from 'react-bootstrap'

const formattedInt = (int)=>{
    return (int<=0?"":"+") + int
  }

const evalBonus = (level,bonusType)=>{
  switch(bonusType)
  {
    case("FL"):
      return (1*level)
    case("TH"):
      return Math.floor(2/3*level)
    case("HF"):
      return Math.floor(1/2*level)
    case("OT"):
      return Math.floor(1/3*level)
    default:
      return 0
  }
}

function Preview({attributes,race,pclass}) 
{
    
  let bab = evalBonus(1,pclass.bab)

  return (
  <Container className="border overflow-auto" style={{height:"100px"}}>
    <h3>Name, the {pclass.name}</h3>
    <h4>{race.name}</h4>
    {attributes.map((attr)=>(<h5 key={attr.name}>{attr.name}:{attr.base}</h5>))}
    <p>Hp: {Math.max(pclass.hitDice + attributes[2].bonus,1)}</p>
    <p>Ac: {10+attributes[1].bonus}</p>
    <p>Touch: {10+attributes[1].bonus}</p>
    <p>Flat footed: 10</p>
    <p>Initiative: {formattedInt(attributes[1].bonus)}</p>
    <p>BAB: {formattedInt(bab)}</p>
    <p>CMD: {10+attributes[1].bonus+attributes[0].bonus}</p>
    <p>CMB: {formattedInt(bab+attributes[0].bonus)}</p>
    <p>Melee: {formattedInt(bab+attributes[0].bonus)}</p>
    <p>Ranged: {formattedInt(bab+attributes[1].bonus)}</p>
    <p>Skillpoints: {Math.max(pclass.skillPoints+attributes[3].bonus,1)}</p>
    <h5>Racial features:</h5>
    <ul>
      {race.baseFeatures.map((feature)=>(<li key={feature.name} title={feature.description}>{feature.name}</li>))}
    </ul>
    <h5>Class features:</h5>
    <ul>
      {pclass.special.length > 0 && Object.entries(pclass.special[0]).map((val)=>(<li key={val[0]} title={pclass.classFeatures[val[1]].description}>{val[0]}</li>))}
    </ul>
  </Container>
  )
}

export default Preview