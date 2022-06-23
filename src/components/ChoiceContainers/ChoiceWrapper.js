import React from 'react'

import { Row,ListGroup,ListGroupItem} from 'react-bootstrap'

function ChoiceWrapper({description,choices,choiceFun}) {
  return (
    <>
    <h4>Choose a {description}</h4>
    <Row className="flex-grow-1 overflow-auto">
      <ListGroup>
        {choices.map((choice)=>
        (<ListGroupItem action key={choice.name} onClick={()=>choiceFun(choice)}>{choice.name}</ListGroupItem>))}
        </ListGroup>
    </Row>
    </>
  )
}

export default ChoiceWrapper