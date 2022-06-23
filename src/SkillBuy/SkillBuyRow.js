import { Button,Form,Col,Container,Row } from "react-bootstrap"


const SkillBuyRow = ({attributes,skill, onChange, canLevel}) => {

    function increment()
    {
        if (skill.ranks<1 && canLevel)
            onChange(skill.name,skill.ranks+1,skill.class)
    }
    function decrement()
    {
        if (skill.ranks>0)
            onChange(skill.name,skill.ranks-1,skill.class)
    }

    return (
    <tr style={{verticalAlign:"middle"}}>
        <td style={{textDecoration: skill.class ? "underline" : ""}}>
            {skill.name}
        </td>
        <td>
            {skill.attribute}
        </td>
        <td>
            <Row>
            <Col className="g-0" md={2} >
            <Button onClick={()=>decrement()} className ="float-end" style={{width:"38px"}}>-</Button>
            </Col>
            <Col md={8} className="g-0">
            <Form>
            <Form.Control type="text" value={skill.ranks} readOnly/>
            </Form>
            </Col>
            <Col md={2} className="g-0"><Button 
            onClick={()=>increment()}
            style={{width:"38px"}}>+</Button></Col>
            </Row>
        </td>
        <td style={{textAlign:"center"}}>
            {parseInt(skill.ranks)+((skill.class&(skill.ranks>0))?3:0)+parseInt(attributes.find(element=> element.name === skill.attribute).bonus)}
        </td>
    </tr>
  )
}

export default SkillBuyRow