import { useParams, Navigate } from 'react-router-dom'
import logements from '../data/logements.json'
import Slideshow from '../components/Slideshow/Slideshow'
import Collapse from '../components/Collapse/Collapse'
import Rating from '../components/Rating/Rating'
import Tag from '../components/Tag/Tag'
import './Logement.scss'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to="/404" />
  }

  return (
    <div className="logement">
      <Slideshow pictures={logement.pictures} />

      <div className="logement__info">
        <div className="logement__details">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>

          <div className="logement__tags">
            {logement.tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>

        <div className="logement__host-rating">
          <div className="logement__host">
            <p className="logement__host-name">{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt={`Photo de ${logement.host.name}`}
              className="logement__host-picture"
            />
          </div>

          <Rating rating={parseInt(logement.rating)} />
        </div>
      </div>

      <div className="logement__collapses">
        <div className="collapse--logement">
          <Collapse title="Description">
            <p>{logement.description}</p>
          </Collapse>
        </div>

        <div className="collapse--logement">
          <Collapse title="Équipements">
            <ul>
              {logement.equipments.map((eq) => (
                <li key={eq}>{eq}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  )
}

export default Logement
