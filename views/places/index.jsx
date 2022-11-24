const React = require('react')
const places = require('../../controllers/places')
const Def = require('../default')

function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
        <h2>{place.name}</h2>
        <p className="test-center">
          {places.cuisines}
          </p>
        <img src={place.pic} alt={place.name}/>
        <p className="text-center">
          located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>Places to Rant or Rave About</h1>
            <div className="row">
            {placesFormatted}
            </div>
        </main>
    </Def>
)
}

  

module.exports = index

