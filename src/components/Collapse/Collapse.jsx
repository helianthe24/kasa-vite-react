import { useState, useRef, useEffect } from 'react'
import './Collapse.scss'

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const contentRef = useRef(null)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [children, isOpen])

  return (
    <div className={`collapse ${isOpen ? 'collapse--open' : ''}`}>
      <div className="collapse__header" onClick={toggleCollapse}>
        <h2 className="collapse__title">{title}</h2>
        <div className="collapse__arrow">
          <svg viewBox="0 0 24 24">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </div>
      </div>
      <div
        className="collapse__content"
        style={{
          maxHeight: isOpen ? `${height}px` : '0px',
        }}
      >
        <div className="collapse__inner" ref={contentRef}>
          <div className="collapse__text">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Collapse
