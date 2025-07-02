import React, { useState } from 'react'
import './Slideshow.scss'

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const length = pictures.length

  const goToPrevious = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? length - 1 : prevIndex - 1
      )
      setIsTransitioning(false)
    }, 150)
  }

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === length - 1 ? 0 : prevIndex + 1
      )
      setIsTransitioning(false)
    }, 150)
  }

  if (length === 0) return null

  return (
    <div className={`slideshow ${length === 1 ? 'slideshow--single' : ''}`}>
      <div className="slideshow__image-container">
        <img
          src={pictures[currentIndex]}
          alt={`slide ${currentIndex + 1}`}
          className={`slideshow__image ${
            isTransitioning ? 'slideshow__image--transitioning' : ''
          }`}
        />
      </div>

      {length > 1 && (
        <>
          <button
            className="slideshow__arrow slideshow__arrow--prev"
            onClick={goToPrevious}
          >
            <svg viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          <button
            className="slideshow__arrow slideshow__arrow--next"
            onClick={goToNext}
          >
            <svg viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
          <div className="slideshow__counter">{`${
            currentIndex + 1
          } / ${length}`}</div>
        </>
      )}
    </div>
  )
}

export default Slideshow
