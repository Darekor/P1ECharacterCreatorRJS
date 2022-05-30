import React from 'react'
import ClassLine from './ClassLine'

function ClassChoice({classes, classChoice}) {
  return (
    <div>
        <h4>Choose your class</h4>
        {classes.map((pclass) =>
        (<ClassLine key={pclass.name} pclass={pclass} pclassChoice={classChoice} />))
        }
    </div>
  )
}

export default ClassChoice