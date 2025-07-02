import Collapse from '../components/Collapse/Collapse'
import './About.scss'

function About() {
  return (
    <div className="about-page">
      <Collapse title="Fiabilité">
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale…</p>
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
  )
}

export default About
