import React from 'react'
import FadeUp from '../animations/FadeUp';
import Header from '../components/Header';
import Feature from '../components/Feature';
import Event  from '../components/Event ';
import About from '../components/About';
import Contact from '../components/Contact';
import { Fade } from 'react-awesome-reveal';
function Home() {
  return (
    <div>
          <div className="App">
          <Fade
              triggerOnce={true}
              cascade={true}
              damping={0.1}
              direction='up'
              duration={500}
              fraction={0}
              delay={500}
            >
    <Header />
    </Fade>
    <Feature />
   
    <Event />
    <Fade
              triggerOnce={true}
              cascade={true}
              damping={0.1}
              direction='up'
              duration={500}
              fraction={0}
              delay={800}
            >
    <About />
    </Fade>
    <Contact />
    </div>
    </div>
  )
}

export default Home