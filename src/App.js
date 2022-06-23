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

const initialSkills = [
  {
    name:"Acrobatics",
    ranks:0,
    attribute:"Dexterity",
    class:false
  },
  {
    name:"Disable Device",
    ranks:0,
    attribute:"Dexterity",
    class:false
  },
  {
    name:"Escape Artist",
    ranks:0,
    attribute:"Dexterity",
    class:false
  },
  {
    name:"Fly",
    ranks:0,
    attribute:"Dexterity",
    class:false
  },
  {
    name:"Ride",
    ranks:0,
    attribute:"Dexterity",
    class:false
  },
  {
    name:"Sleight of Hand",
    ranks:0,
    attribute:"Dexterity",
    class:false
  },
  {
    name:"Stealth",
    ranks:0,
    attribute:"Dexterity",
    class:false
  },
  {
    name:"Appraise",
    ranks:0,
    attribute:"Intelligence",
    class:false
  },
  {
    name:"Craft",
    ranks:0,
    attribute:"Intelligence",
    class:false
  },
  {
    name:"Knowledge (arcana)",
    ranks:0,
    attribute:"Intelligence",
    class:false
  },
  {
    name:"Knowledge (dungeoneering)",
    ranks:0,
    attribute:"Intelligence",
    class:false
  },
  {
    name:"Knowledge (engineering)",
    ranks:0,
    attribute:"Intelligence",
    class:false
  },
  {
    name:"Knowledge (geography)",
    ranks:0,
    attribute:"Intelligence",
    class:false
  },
  {
    name:"Knowledge (history)",
    ranks:0,
    attribute:"Intelligence",
    class:false
  },
  {
    name:"Knowledge (local)",
    ranks:0,
    attribute:"Intelligence",
    class:false
  },
  {
    name:"Knowledge (nature)",
    ranks:0,
    attribute:"Intelligence",
    class:false
  },
  {
    name:"Knowledge (nobility)",
    ranks:0,
    attribute:"Intelligence",
    class:false
  },
  {
    name:"Knowledge (planes)",
    ranks:0,
    attribute:"Intelligence",
    class:false
  },
  {
    name:"Knowledge (religion)",
    ranks:0,
    attribute:"Intelligence",
    class:false
  },
  {
    name:"Linguistics",
    ranks:0,
    attribute:"Intelligence",
    class:false
  },
  {
    name:"Spellcraft",
    ranks:0,
    attribute:"Intelligence",
    class:false
  },
  {
    name:"Bluff",
    ranks:0,
    attribute:"Charisma",
    class:false
  },
  {
    name:"Diplomacy",
    ranks:0,
    attribute:"Charisma",
    class:false
  },
  {
    name:"Disguise",
    ranks:0,
    attribute:"Charisma",
    class:false
  },
  {
    name:"Handle Animal",
    ranks:0,
    attribute:"Charisma",
    class:false
  },
  {
    name:"Intimidate",
    ranks:0,
    attribute:"Charisma",
    class:false
  },
  {
    name:"Perform",
    ranks:0,
    attribute:"Charisma",
    class:false
  },
  {
    name:"Use Magic Device",
    ranks:0,
    attribute:"Charisma",
    class:false
  },
  {
    name:"Climb",
    ranks:0,
    attribute:"Strength",
    class:false
  },
  {
    name:"Swim",
    ranks:0,
    attribute:"Strength",
    class:false
  },
  {
    name:"Heal",
    ranks:0,
    attribute:"Wisdom",
    class:false
  },
  {
    name:"Perception",
    ranks:0,
    attribute:"Wisdom",
    class:false
  },
  {
    name:"Profession",
    ranks:0,
    attribute:"Wisdom",
    class:false
  },
  {
    name:"Sense Motive",
    ranks:0,
    attribute:"Wisdom",
    class:false
  },
  {
    name:"Survival",
    ranks:0,
    attribute:"Wisdom",
    class:false
  }
]

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
      else 
        return attribute
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

  const[skills,setSkills] = useState(initialSkills)

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

  const changeSkill = (name, newval,pclass) =>{
    setSkills(skills.map((skill)=>{
      if (skill.name===name)
        {
          let res = skill
          res.ranks = newval
          res.class = pclass
          return res
        }
      else return skill
    }
    ))
  }

  const setClass = (pclass) =>{
    setChosenClass(pclass)
    setSkills(skills.map((sk)=>
      {
        let res = sk
        res.ranks = 0
        res.class = false
        return res}
    ))
    pclass.skills.forEach(element =>
      addSkill(element)
    )
  } 

  const addSkill = (skill) =>{
    setSkills(skills.map((sk)=>
    {
      if (sk.name === skill){
        let res = sk
        res.class = true
        return res
      }
      else 
        return sk
    }
    ))
  }

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
          classes = {classes} classChoice = {setClass}
          feats = {feats} featChoice={setChosenFeat}
          skills = {skills} skillChange={changeSkill}
          race={chosenRace} pclass={chosenClass} feat={chosenFeat}/>
        </Col>

        <Col md={3} >
          <Preview attributes={attributes} race={chosenRace} pclass={chosenClass}/>
        </Col>
      </Row>

    </Container>
  );
}

export default App;
