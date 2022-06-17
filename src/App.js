import Header from "./components/Header"
import GenerationContainer from "./components/GenerationContainer";
import Preview from "./components/Preview";

import { Container,Col,Row } from "react-bootstrap";

import { useState,useEffect } from "react";

const evaluatePrice = (int)=>{
  switch(true)
  {
      case (int==7):
          return -4
      case (int<14):
          return (int-10)
      case (int==14):
          return 5
      case (int==15):
          return 7
      case (int==16):
          return 10
      case (int==17):
          return 13
      case (int==18):
          return 17
      default:
          return NaN
  }
}



function App() {


  const [attributes, setAttributes] = useState([
    {
      name: "Strength",
      base: 10,
      pointCost: 0,
      bonus: 0
    },
    {
      name: "Dexterity",
      base: 10,
      pointCost: 0,
      bonus: 0
    },
    {
      name: "Constitution",
      base: 10,
      pointCost: 0,
      bonus: 0
    },
    {
      name: "Intelligence",
      base: 10,
      pointCost: 0,
      bonus: 0
    },
    {
      name: "Wisdom",
      base: 10,
      pointCost: 0,
      bonus: 0
    },
    {
      name: "Charisma",
      base: 10,
      pointCost: 0,
      bonus: 0
    },
    ])
  const changeBaseAttribute = (name, newval) =>{
    setAttributes(attributes.map((attribute)=>{
      if (attribute.name===name)
        {
          let res = attribute
          res.base = newval
          res.pointCost = evaluatePrice(res.base)
          res.bonus = Math.floor((res.base-10)/2)
          return res
        }
      else return attribute
    }
    ))
  }
  const [races, setRaces] = useState([])
  const getRacesData = async() =>{
    const response = await fetch('https://ktor-p1eapi.herokuapp.com/race')
    .then(response => response.json());
    setRaces(response);
  }

  const[classes,setClasses] = useState([])
  const getClassesData = async() =>{
    const response = await fetch('https://ktor-p1eapi.herokuapp.com/class')
    .then(response => response.json());
    setClasses(response);
  }

  const [chosenRace, setChosenRace] = useState(
    {
    name: "",
    sources: "",
    lore: "",
    baseFeatures: [],
    replacementFeatures:[],
    favouredClassOptions: []
    }
  )
  const [chosenClass, setChosenClass] = useState(
    {
      name: "",
      description: "",
      hitDice: 0,
      wealthDiceCount: 0,
      skills: [
      ],
      skillPoints: 0,
      bab: "FL",
      saves: [
        "TH",
        "OT",
        "OT"
      ],
      special: [{}],
      classFeatures: []
    },
  )
  const [chosenFeat,setChosenFeat] = useState(
    {
      name: "",
      source: "",
      sourceSite:"",
      flavor:"",
      prerequisites:{},
      description:"",
      normal:"",
      special:"",
      tags:"",
      type:"UTP"
    }
  )

  const [feats,setFeats] = useState([])
  const getFeatsData = async()=>{
    const response = await fetch('https://ktor-p1eapi.herokuapp.com/feat')
    .then(response => response.json());
    setFeats(response);
  }

  useEffect(() => {
    getRacesData();
    getClassesData();
    getFeatsData();
  }, []);

  return (
    <Container className="App vh-100">
      <Row>
        <Header/>
      </Row>

      <Row style={{height:"90%"}} className="">
        <Col md={9} className="h-100 d-flex flex-column">
        <GenerationContainer 
          attributes = {attributes} onChange = {changeBaseAttribute}
          races = {races} raceChoice = {setChosenRace}
          classes = {classes} classChoice = {setChosenClass}
          feats = {feats} featChoice={setChosenFeat}/>
        </Col>

        <Col md={3} >
          <Preview attributes={attributes} race={chosenRace} pclass={chosenClass}/>
        </Col>
      </Row>

    </Container>
  );
}

export default App;
