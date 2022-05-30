import React from 'react'
import {useState} from "react"

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
        default:
            current = <h3>There is nothing here</h3>
            break;
    }

    return (
    <div style={{float:"left", backgroundColor:"#ccc", padding:"25px", width:"50%", height:"350px", position:'relative' }}>
        <p>Current stage:{stage}</p>
        {current}
        <button style={{position:"absolute", bottom:0}} onClick={() => setStage(stage-1)}>Previous</button>
        <button style={{position:"absolute", bottom:0,right:0}} onClick={() => setStage(stage+1)}>Next</button>
    </div>
    )
}

export default GenerationContainer