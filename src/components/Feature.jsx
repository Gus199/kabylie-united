import React from 'react'
import Featurebox from './Featurebox'
import fimage1 from '../images/Football_Player.png'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'
import { Fade } from 'react-awesome-reveal';

function Feature() {
  return (
    <div id='features'>
        <h1>FEATURES</h1>
        <div className='a-container'>
        <Fade
                    delay={1000}
                    cascade={true}
                    damping={0.25}
                    triggerOnce
                    direction='up'
                    duration={500}
                    fraction={0}
                  >
            <Featurebox  image={fimage1} title="Lorem Ipsum 1 "/>
            <Featurebox  image={fimage2} title="Lorem Ipsum 2 "/>
            <Featurebox  image={fimage3} title="Lorem Ipsum 3 "/>
            <Featurebox  image={fimage4} title="Lorem Ipsum 4 "/>
            </Fade>
        </div>
    </div>
  )
}

export default Feature