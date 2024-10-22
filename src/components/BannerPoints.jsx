import React from 'react'

const BannerPoints = (props) => {
  return (
    <div className="d-flex bannerPoint align-items-center"> 
                                <img alt="image" className='bn-short-img' src={props.img} />    
                                <p className="bannerPoint_Para text-white">{props.para}</p>
                            </div>
  )
}

export default BannerPoints