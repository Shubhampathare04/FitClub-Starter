import React from 'react'
import './Program.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Program = () => {
  return (
    <div className="program" id="program">
        <div className="program-header">
            <span className='stroke-text'>Explore our</span>
            <span>programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        <div className="program-categories">
            {programsData.map((Program)=>(
            <div className="category">
                {Program.image}
                <span>{Program.heading}</span>
                <span>{Program.details}</span>
                <div className="join-now"><span>join Now</span><img src={RightArrow} alt="" />
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Program
