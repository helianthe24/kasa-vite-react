import logements from '../data/logements.json'
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import bannerImg from '../images/banner-fin.png'
import bannerMobileImg from '../images/banner-finm.png'
import './Home.scss'

function Home() {
  return (
    <div className="home">
      <Banner image={bannerImg} mobileImage={bannerMobileImg} />
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
