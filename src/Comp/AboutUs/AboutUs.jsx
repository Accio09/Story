import React from 'react'
import './AboutUs.css'
import about_img from '../../assets/about.png'

const AboutUs = () => {
  return (
    <div className='about' id = "about">
    <div className="about-left">
      <img src={about_img} alt="" className='about-img' />
    </div>
    <div className="about-right">
      <h3>Latest Watch</h3>
      <h2>Alice in Borderland</h2>
      <p>
        Synopsis - Arisu Ryohei—a listless, jobless and video-game-obsessed young man—suddenly finds himself in a strange, emptied-out version of Tokyo in which he and his friends must compete in dangerous games in order to survive
      </p>

      <p>
        My thoughts- The webseries offered a rollercoaster of twists and turns. While some initial parts of the surprises were expected, the follow-up developments consistently blew my mind.  It's always a thrill to be shocked from the comfort of your couch! Additionally, the characters were portrayed with depth, not as one-dimensional heroes or villains. They were flawed, sometimes enigmatic, and possessed intriguing backstories that left me wanting more.  Every character held hidden layers, keeping me engaged in their journeys. 
      </p>
    </div>
  </div>
  )
}

export default AboutUs
