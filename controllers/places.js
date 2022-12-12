const router = require('express').Router()
const db = require('../models')

// render place page
router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

//create places
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//new
router.get('/new', (req, res) => {
  res.render('places/new')
})

//show
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//Update Route
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

//Delete Route
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

//Edit
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router
