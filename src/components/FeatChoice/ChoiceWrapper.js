import React from 'react'

import { ListGroup,ListGroupItem} from 'react-bootstrap'

function ChoiceWrapper({choices,choiceFun}) {
  return (
    <>
      <h4>Choose</h4>
      <ListGroup>
        {choices.map((choice)=>
        (<ListGroupItem action key={choice.name} onClick={()=>choiceFun(choice)}>{choice.name}</ListGroupItem>))}
        </ListGroup>
    </>
  )
}

export default ChoiceWrapper