import React from 'react'
import {useState} from "react"

import { Container,Button, Row,Col } from "react-bootstrap";

import PointBuyCalculator from './PointBuy/PointBuyCalculator'
import RaceChoice from './RaceChoice/RaceChoice'
import ClassChoice from './ClassChoice/ClassChoice'

function GenerationContainer({
    attributes,onChange,
    races,raceChoice,
    classes,classChoice}) {

    const[stage,setStage] = useState(0)
    
    let current
    switch(stage)
    {
        case 0:
            current = <PointBuyCalculator attributes = {attributes} onChange = {onChange}/>
            break;
        case 1:
            current = <RaceChoice races={races} raceChoice={raceChoice}/>
            break;
        case 2:
            current = <ClassChoice classes={classes} classChoice={classChoice}/>
            break;
        case 3:
            current = <h3>Pick your skills</h3>
            break; 
        case 4:
            current = <h3>Pick your feats</h3>
            break;   
        case 5:
            current = <h3>Buy equipment</h3>
            break;
        case 6:
            current = <h3>Finishing details</h3>
            break;                                                
        default:
            current = <h3>There is nothing here</h3>
            break;
    }

    return (
    <Container className="h-100">
        <Row>
            <p>Counting states</p>
        </Row>
        <div className="d-flex flex-grow-1">
            {current}
        </div>
        <Row>
            <Button disabled={stage<=0} onClick={() => setStage(stage-1)}>Previous</Button>
            <Button className='float-end' disabled={stage>=6}onClick={() => setStage(stage+1)}>Next</Button>  
        </Row>
    </Container>
    )
}

export default GenerationContainer