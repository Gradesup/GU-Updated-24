import React from 'react'

const SecondaryHeading = ({heading,style,onClick}) => {
  return <h3 className='secondaryHeading' style={style} onClick={onClick}> {heading}</h3>
}

export default SecondaryHeading