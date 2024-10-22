import React from 'react'

const BulletPoint = (props) => {
  return (
    <div className="bulletPoint">
    <div className="d-flex align-items-start" style={{gap : '10px'}}>
            <i className="fa fa-check" style={{fontSize: '12px'}}></i>
            <p>{ props.bulletpoint }</p>
        </div>
    </div>
  )
}

export default BulletPoint