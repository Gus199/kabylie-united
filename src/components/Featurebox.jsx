import React from 'react'

function Featurebox({image, title}) {
  return (
    <div className='a-box'>
        <div className='a-b-img'>
            <img src={image} alt='' />
        </div>
        <div className='a-b-text'>
            <h2> {title}</h2>
            <p>Lorem ipnjknjknk fnfefne fenfjef ef</p>
        </div>
    </div>
  )
}

export default Featurebox