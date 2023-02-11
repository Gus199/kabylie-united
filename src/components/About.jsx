import React from 'react'
import aboutimage from '../images/foot3.jpg'

function About() {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt=''/>
        </div>
        <div className='about-text'>
            <h1>KIDS SOCCER ACADEMY</h1>
            <p><span >COACHING BY ROUGIE :</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            </p>
            <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About