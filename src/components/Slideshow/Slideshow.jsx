// src/components/Slideshow/Slideshow.jsx
import React, { useState } from 'react'
import './Slideshow.scss'

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const length = pictures.length

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === length - 1 ? 0 : prevIndex + 1
    )
  }

  if (length === 0) return null

  return (
    <div className="slideshow">
      <img src={pictures[currentIndex]} alt={`slide ${currentIndex + 1}`} />

      {length > 1 && (
        <>
          <button className="prev" onClick={goToPrevious}>
            ‹
          </button>
          <button className="next" onClick={goToNext}>
            ›
          </button>
          <div className="counter">{`${currentIndex + 1} / ${length}`}</div>
        </>
      )}
    </div>
  )
}

export default Slideshow
