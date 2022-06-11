import React from 'react'
import ClassLine from './ClassLine'
import { Container, ListGroup } from "react-bootstrap";
function ClassChoice({classes, classChoice}) {
  return (
    <>
        <h4>Choose your class</h4>
        <ListGroup>
        {classes.map((pclass) =>
        (<ClassLine key={pclass} pclass={pclass} pclassChoice={classChoice} />))
        }
        </ListGroup>
    </>
  )
}

export default ClassChoice