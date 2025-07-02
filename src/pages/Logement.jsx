import { useParams, Navigate } from 'react-router-dom'
import logements from '../data/logements.json'
import Slideshow from '../components/Slideshow/Slideshow'
import Collapse from '../components/Collapse/Collapse'
import Rating from '../components/Rating/Rating'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((item) => item.id === id)

  if (!logement) {
    return <Navigate to="/404" />
  }

  return (
    <div>
      <Slideshow pictures={logement.pictures} />

      <div>
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>

        <div>
          {logement.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div>
        <div>
          <p>{logement.host.name}</p>
          <img
            src={logement.host.picture}
            alt={`Photo de ${logement.host.name}`}
          />
        </div>

        <Rating rating={parseInt(logement.rating)} />
      </div>

      <div>
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((eq) => (
              <li key={eq}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  )
}

export default Logement
