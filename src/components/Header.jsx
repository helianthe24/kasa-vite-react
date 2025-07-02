import './Header.scss'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">À propos</NavLink>
      </nav>
    </header>
  )
}

export default Header
