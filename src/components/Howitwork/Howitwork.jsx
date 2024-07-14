import React from 'react'
import HowitworkImg from "../../assets/howit-1.png"
import HowitworkImgTwo from "../../assets/howit-2.svg"
import "./howitwork.css"

function Howitwork() {
  return (
    <div className='Howitwork'>
      <div className="howitwork-one">
        <div className="howitwork-container">
          <div className="howitwork-image">
            <img src={HowitworkImg} alt="" />
          </div>
          <div className="howitwork-content">
            <div className='howitwork-header'>
            DESIGN CHALLENGES
          </div>
          <div className="howitwork-body">
          <h2>Practice real-world design exercises</h2>
          <p>Tap into a library of design lessons covering key topics such as interaction design, mobile UX, user interviews, and more.</p>
          <div className="howitwork-btn">
          <a href="#">Learn More</a>
          <div className="new-tag">
            New
          </div>
          </div>
        </div>
          </div>
        </div>
      </div>

      {/* Howitwork Two */}
 

    </div>
  )
}

export default Howitwork