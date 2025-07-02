import { useState } from 'react'
import './Collapse.scss'

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>⌃</span>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default Collapse
