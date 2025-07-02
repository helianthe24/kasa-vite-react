import './Banner.scss'

function Banner({ image, mobileImage, text }) {
  return (
    <div className="banner">
      <div
        className={`banner__container ${!text ? 'banner--no-text' : ''}`}
        style={{
          '--banner-image': `url(${image})`,
          '--banner-image-mobile': mobileImage
            ? `url(${mobileImage})`
            : `url(${image})`,
        }}
      >
        {text && <h1 className="banner__title">{text}</h1>}
      </div>
    </div>
  )
}

export default Banner
