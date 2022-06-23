import React from 'react'
import {useState} from "react"
import {Button, Row,Col, Pagination } from "react-bootstrap";

import PointBuyCalculator from './PointBuy/PointBuyCalculator'
import ChoiceWrapper from './ChoiceContainers/ChoiceWrapper'
import FinishingPage from './FinishingPage';
import SkillBuyTable from '../SkillBuy/SkillBuyTable';

function GenerationContainer({
    attributes,onChange,
    races,raceChoice,
    classes,classChoice,
    feats,featChoice,
    skills,skillChange,
    race,pclass,feat}) {

    const[stage,setStage] = useState(0)
    
    let current
    switch(stage)
    {
        case 0:
            current = <PointBuyCalculator attributes = {attributes} onChange = {onChange}/>
            break;
        case 1:
            current = <ChoiceWrapper description={"race"} choices={races} choiceFun={raceChoice}/>
            break;
        case 2:
            current = <ChoiceWrapper description={"class"} choices={classes} choiceFun={classChoice}/>
            break;
        case 3:
            current = <SkillBuyTable attributes={attributes} skills={skills} skillChange={skillChange} skillpoints={Math.max(pclass.skillPoints+attributes[3].bonus,1)} />
            break; 
        case 4:
            current = <ChoiceWrapper description={"feat"} choices={feats} choiceFun={featChoice}></ChoiceWrapper>
            break;   
        case 5:
            current = <Row>
                <h3>Starting gold</h3>
                <p>You would start with {pclass.wealthDiceCount * 35} gp</p>
            </Row>
            break;
        case 6:
            current = <FinishingPage attributes={attributes} pclass={pclass} race={race} feat={feat} skills={skills}/>
            break;                                                
        default:
            current = <h3>There is nothing here</h3>
            break;
    }

    let pages=[];
    pages.push(
        <Pagination.Prev disabled={stage<1} onClick={() => setStage(stage-1)}/>
    )
    for (let num=1; num<=6;num++){
        pages.push(
            <Pagination.Item key={num} active={num===stage+1} onClick={()=>(setStage(num-1))}>
                {num}
            </Pagination.Item>
        )
    }
    pages.push(
        <Pagination.Item key={7} disabled={(race.name==""||pclass.name=="")} active={7===stage+1} onClick={()=>(setStage(6))}>
            {7}
        </Pagination.Item>
    )
    pages.push(
        <Pagination.Next disabled={(stage>5)||((stage==5) && (race.name==""||pclass.name==""))} onClick={() => setStage(stage+1)}/>
    )

    return (
    <>
        <Row>
            <Pagination className='d-flex justify-content-center'>
                {pages}
            </Pagination>
        </Row>
        {current}
    </>
    )
}

export default GenerationContainer