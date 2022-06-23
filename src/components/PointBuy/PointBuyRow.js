import { Form,Row,Col,Button } from "react-bootstrap"

const PointBuyRow = ({attribute, onChange}) => {    
    function increment()
    {
        if (attribute.base<18)
            onChange(attribute.name,parseInt(attribute.base+1))
    }
    function decrement()
    {
        if (attribute.base>7)
            onChange(attribute.name,parseInt(attribute.base-1))
    }

    return (
    <tr style={{verticalAlign:"middle"}}>
        <td>
            {attribute.name}
        </td>
        <td>
        <Row>
            <Col className="g-0" md={2} >
            <Button onClick={()=>decrement()} className ="float-end" style={{width:"38px"}}>-</Button>
            </Col>
            <Col md={8} className="g-0">
            <Form>
            <Form.Control type="text" value={attribute.base} readOnly/>
            </Form>
            </Col>
            <Col md={2} className="g-0">
            <Button onClick={()=>increment()} style={{width:"38px"}}>+</Button></Col>
            </Row>
        </td>
        <td style={{textAlign:"center"}}>
            {Math.floor((attribute.base - 10)/2)}
        </td>
        <td style={{textAlign:"center"}}>
            {attribute.pointCost}
        </td>
    </tr>
  )
}

export default PointBuyRow