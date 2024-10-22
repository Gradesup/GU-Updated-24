import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="NotFound ff-tenor">
      <h1>
       <span id="span1">4</span>
       <span id="span2">0</span>
       <span id="span3">4</span>
        </h1>
      <h5>PAGE NOT FOUND</h5>
      <Link to='/' >Back to Home</Link>
    </div>
  )
}

export default NotFound