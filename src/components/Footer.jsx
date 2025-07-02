import './Footer.scss'
import logo from '../images/logo.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={logo} alt="Kasa" />
      </div>
      <p className="footer__text">© 2024 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
