const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
              <img src="https://placekitten.com./200/287" alt="cat"/>
                </div>
                <div>
        Photo by <a href="PHOTO_LINK">Place Kitten</a> 
      </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
