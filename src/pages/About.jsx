import Banner from '../components/Banner/Banner'
import Collapse from '../components/Collapse/Collapse'
import bannerImg from '../images/banner.png'
import './About.scss'

function About() {
  return (
    <div className="apropos">
      <Banner image={bannerImg} />
      <div className="apropos__content">
        <div className="apropos__collapses">
          <Collapse title="Fiabilité">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale…
            </p>
          </Collapse>
          <Collapse title="Respect">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa…</p>
          </Collapse>
          <Collapse title="Service">
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite.
            </p>
          </Collapse>
          <Collapse title="Sécurité">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs.
            </p>
          </Collapse>
        </div>
      </div>
    </div>
  )
}

export default About
