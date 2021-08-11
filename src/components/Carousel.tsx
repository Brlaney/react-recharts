import React from 'react'
import '../scss/carousel.scss'


const Carousel = (props: { children: any }) => {
  const { children } = props

  return (
    <div className='carousel-container'>
      <div className='carousel-wrapper'>
        <div className='carousel-content-wrapper'>
          <div className='carousel-content'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel