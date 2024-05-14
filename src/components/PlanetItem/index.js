import './index.css'

const PlanetItem = props => {
  const {details} = props

  const {name, imageUrl, description} = details
  return (
    <div className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-des">{description}</p>
    </div>
  )
}

export default PlanetItem
