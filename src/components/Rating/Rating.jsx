import redStar from '../../images/red-star.png'
import greyStar from '../../images/grey-star.png'

function Rating({ rating }) {
  const stars = []

  for (let i = 1; i <= 5; i++) {
    const star = i <= rating ? redStar : greyStar
    stars.push(
      <img
        key={i}
        src={star}
        alt={i <= rating ? 'Étoile rouge' : 'Étoile grise'}
      />
    )
  }

  return <div className="rating">{stars}</div>
}

export default Rating
