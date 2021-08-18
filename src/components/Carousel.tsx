import React, { useState, useEffect } from 'react'
import '../scss/carousel.scss'


const Carousel = (props: { children: any }) => {
  const { children } = props
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)

  useEffect(() => {
    setLength(children.length)
  }, [children])

  const next = () => {
    if (currentIndex < (length - 1)) {
      setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  return (
    <div className='carousel-container'>
      <div className='carousel-wrapper'>

        {/* Left arrow (carousel) */}
        {currentIndex > 0 &&
          <button onClick={prev} className='left-arrow'>
            &lt;
          </button>}

        {/* Carousel */}
        <div className='carousel-content-wrapper'>
          <div
            className='carousel-content'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>

        {/* Right arrow (carousel) */}
        {currentIndex < (length - 1) &&
          <button onClick={next} className='right-arrow'>
            &gt;
          </button>}
      </div>
    </div>
  )
}

export default Carousel
