import React from 'react'
import {useState} from "react"

import { Container,Button, Row,Col, Pagination } from "react-bootstrap";

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

    let pages=[];
    for (let num=0; num<=6;num++){
        pages.push(
            <Pagination.Item key={num} active={num==stage} onClick={()=>(setStage(num))}>
                {num}
            </Pagination.Item>
        )
    }

    return (
    <>
        <Row>
            <Pagination>
                {pages}
            </Pagination>
        </Row>
        <Row className="flex-grow-1 overflow-auto">
            {current}
        </Row>
        <Row>
            <Col>
                <Button disabled={stage<=0} onClick={() => setStage(stage-1)}>Previous</Button>
            </Col>
            <Col>
                <Button className='float-end' disabled={stage>=6}onClick={() => setStage(stage+1)}>Next</Button>
            </Col>
        </Row>
    </>
    )
}

export default GenerationContainer