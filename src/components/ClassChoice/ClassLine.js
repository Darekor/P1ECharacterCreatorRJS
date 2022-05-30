import React from 'react'

function ClassLine({pclass, pclassChoice}) {
  return (
    <div onClick={()=>pclassChoice(pclass)}>{pclass.name}
    </div>
  )
}

export default ClassLine