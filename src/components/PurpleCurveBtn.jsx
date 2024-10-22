import React from 'react'

const PurpleCurveBtn = (props) => {
    const { btnText, style } = props;
  return (
    <h6 className='PurpleBtn text-white' style={style}> {props.btnText} </h6>
  )
}

export default PurpleCurveBtn