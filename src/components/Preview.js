import React from 'react'

import {Col,Row, Container} from 'react-bootstrap'

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
  <Container className="border overflow-auto" style={{height:"300px"}}>
    
    <Row className="previewRow">
      <h4>Hero, the {pclass.name}</h4>
      <h5>{race.name}</h5>
    </Row>

    <Row className="previewRow">
      <h5 style={{borderBottom:"thin solid"}}>
        Ability Scores
      </h5>
        {attributes.map((attr)=>(<p key={attr.name}>{attr.name}:{attr.base}</p>))}
    </Row>

    <Row className="previewRow">
      <h5 style={{borderBottom:"thin solid"}}>
        Offence
      </h5>
      <Col>
        <p>BAB: {formattedInt(bab)}</p>
        <p>CMB: {formattedInt(bab+attributes[0].bonus)}</p>
      </Col>
      <Col>
        <p>Melee: {formattedInt(bab+attributes[0].bonus)}</p>
        <p>Ranged: {formattedInt(bab+attributes[1].bonus)}</p>
      </Col>


    </Row>

    <Row className="previewRow">
      <h5 style={{borderBottom:"thin solid"}}>
        Defence
      </h5>
      <Col>
      <p>Hp: {Math.max(pclass.hitDice + attributes[2].bonus,1)}</p>
      <p>CMD: {10+attributes[1].bonus+attributes[0].bonus}</p>
      <p>Saves: {evalBonus(1,pclass.saves[0])+(pclass.saves[0]==="HF"?2:0)+attributes[2].bonus} {evalBonus(1,pclass.saves[1])+(pclass.saves[1]==="TH"?2:0)+attributes[1].bonus} {evalBonus(1,pclass.saves[2])+(pclass.saves[2]==="TH"?2:0)+attributes[4].bonus}</p>
      </Col>
      <Col>
      <p>Ac: {10+attributes[1].bonus}</p>
      <p>Flat footed: 10</p>
      <p>Touch: {10+attributes[1].bonus}</p>
      </Col>
    </Row>

    <Row className="previewRow">
      <h5 style={{borderBottom:"thin solid"}}>
        Miscellaneous
      </h5>
      <p>Initiative: {formattedInt(attributes[1].bonus)}</p>
      <p>Skillpoints: {Math.max(pclass.skillPoints+attributes[3].bonus,1)}</p>
    </Row>

    <Row className="previewRow">
      <h5 style={{borderBottom:"thin solid"}}>Racial features</h5>
      <ul>
        {race.baseFeatures.map((feature)=>(<li key={feature.name} title={feature.description}>{feature.name}</li>))}
      </ul>
    </Row>

    <Row className="previewRow">
      <h5 style={{borderBottom:"thin solid"}}>Class features:</h5>
      <ul>
        {pclass.special.length > 0 && Object.entries(pclass.special[0]).map((val)=>(<li key={val[0]} title={pclass.classFeatures[val[1]].description}>{val[0]}</li>))}
      </ul>
    </Row>
  </Container>
  )
}

export default Preview