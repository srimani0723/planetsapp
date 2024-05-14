import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const planetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container" data-testid="planets">
      <h1 className="slider-h1">Planets</h1>
      <Slider {...settings}>
        {planetsList.map(item => (
          <PlanetItem details={item} key={item.id} />
        ))}
      </Slider>
    </div>
  )
}

export default planetsSlider
