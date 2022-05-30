
const PointBuyRow = ({attribute, onChange}) => {
    
  return (
    <tr>
        <td>
            {attribute.name}
        </td>
        <td>
            <input
            onInput={e => onChange(attribute.name,e.target.value)}
            onKeyDown = {(e)=>{e.preventDefault()}}
            defaultValue = {10}
            type = {"Number"}
            min = {7}
            max = {18}
            >
            </input>
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