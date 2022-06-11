import React from 'react'
import { ListGroupItem } from 'react-bootstrap';

function ClassLine({pclass, pclassChoice}) {
  const getClassData = async(pclass) =>{
    const response = await fetch('https://ktor-p1eapi.herokuapp.com/class/'+pclass)
    .then(response => response.json());
    pclassChoice(response);
  }
  
  return (
    <ListGroupItem action onClick={()=>getClassData(pclass)}>{pclass}
    </ListGroupItem>
  )
}

export default ClassLine