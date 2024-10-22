import React from 'react'
import rating from '../assets/images/rating.png'

const Ratings = (props) => {
  return (
    <div className="rating">
    <img src={props.img} style={{ width: '30px', height: '30px' }} alt="" />
    <h6 className='rating-heading fs-18 ff-tenor fw-600 m-0 text-white line-height-1'>
    {props.name} <br />
    <img
                src={rating}
                alt="stars"
                className='star'
              />
    </h6>
</div>
  )
}

export default Ratings