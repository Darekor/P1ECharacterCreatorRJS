import { Form } from "react-bootstrap"

const PointBuyRow = ({attribute, onChange}) => {
    
  return (
    <tr>
        <td>
            {attribute.name}
        </td>
        <td>
            <Form>
            <Form.Control
            onInput={e => onChange(attribute.name,e.target.value)}
            onKeyDown = {(e)=>{e.preventDefault()}}
            defaultValue = {10}
            type = {"Number"}
            min = {7}
            max = {18}
            >
            </Form.Control>
            </Form>
        </td>
        <td>
            {Math.floor((attribute.base - 10)/2)}
        </td>
        <td>
            {attribute.pointCost}
        </td>
    </tr>
  )
}

export default PointBuyRow