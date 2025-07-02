import logements from '../data/logements.json'
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import bannerImg from '../images/banner.png'
import './Home.scss'

function Home() {
  return (
    <>
      <Banner image={bannerImg} text="Chez vous, partout et ailleurs" />
      <div className="gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </>
  )
}

export default Home
