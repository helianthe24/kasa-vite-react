import './Header.scss'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Kasa" />
      </div>
      <nav className="header__nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Accueil
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/a-propos" className="nav-link">
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
