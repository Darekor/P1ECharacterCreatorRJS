import PointBuyRow from "./PointBuyRow"

import { Table } from "react-bootstrap"

const PointBuyCalculator = ({attributes,onChange}) => {
    return (
    <Table hover style={{maxHeight:"450px"}}>
        <thead>
            <tr>
            <th>
                Attribute
            </th>
            <th>
                Value
            </th>
            <th>
                Bonus
            </th>
            <th>
                Point cost
            </th>
            </tr>
        </thead>
        <tbody>
        {attributes.map((attr)=>
            (<PointBuyRow key={attr.name} attribute={attr} onChange={onChange}/>))}
        </tbody>
        <tfoot>
            <tr>
                <td colSpan={4}><h4>Total point cost:{attributes.reduce((previousValue, currentValue) => previousValue + currentValue.pointCost,0)}</h4></td>
            </tr>
        </tfoot>
    </Table>
  )
}

export default PointBuyCalculator