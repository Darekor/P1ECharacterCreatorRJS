import SkillBuyRow from "./SkillBuyRow"

import { Table,Row } from "react-bootstrap"

const SkillBuyTable = ({attributes,skills,skillChange,skillpoints}) => {

    let total = skills.reduce((prev,current) => prev+current.ranks,0)

    return (
    <>
    <Row className="flex-grow-1 overflow-auto">
    <Table hover>
        <thead>
            <tr>
            <th>
                Skill
            </th>
            <th>
                Attribute
            </th>
            <th>
                Ranks
            </th>
            <th>
                Bonus
            </th>
            </tr>
        </thead>
        <tbody>
        {skills.map((skill)=>
            (<SkillBuyRow key={skill.name} attributes={attributes} skill={skill} onChange={skillChange} canLevel={total<skillpoints}/>))}
        </tbody>
    </Table>
    </Row>
    <p>{total}/{skillpoints} skillpoints</p>
    </>
  )
}

export default SkillBuyTable