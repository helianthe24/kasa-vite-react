import logements from '../data/logements.json'
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import bannerImg from '../images/banner.png'
import './Home.scss'

function Home() {
  return (
    <div className="home">
      <Banner image={bannerImg} text="Chez vous, partout et ailleurs" />
      <div className="home__cards">
        <div className="home__cards-grid">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
