const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {pool} = require('./config')
const {response} = require('express')
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

function requireApiKey(req, res, next) {
  const apiKey = req.query.apiKey
  pool.query('SELECT * from profiles;', (err, result) => { 
    if (err) { 
      return console.error('Error executing query', err.stack) 
    } 
    const database = result.rows
    console.log(database)
    const user = database.filter(user => user.apikey === apiKey)
    console.log(user)
    if (user.length === 0) {
    res.status(401).send('Invalid API Key')
    
  } else {
    req.user=user
    next()
  }
  })

  }
  app.get('/profiles', requireApiKey, (req, res) => {
    pool.query('SELECT * FROM profiles', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send(results.rows)
    })
  })

  app.get('/profiles/:id', requireApiKey, (req, res) => {
    console.log(req.user)
    const user = req.user[0]
      if (user.id !== parseInt(req.params.id)) {
        return res.status(404).send('user not found')
      }
    res.status(200).send(user)
  })
  
  app.delete('/profiles/:id', (req, res) => {
    const id = parseInt(req.params.id)

  pool.query(
    'DELETE FROM profiles WHERE id = $1', [id],
    (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).send('Profile deleted with ID')}
      )
    })

  app.post('/profiles', (req, res) => {
    const {name, bio, apikey} = req.body
     
    pool.query(
       'INSERT INTO profiles (name, bio, apikey) VALUES ($1, $2, $3) RETURNING id',
       [name, bio, apikey],
       (error) => {
         if (error) {
           throw error
         }
       res.status(200).send({status: 'success', message: 'Profile added.'}
    )
    })
    })
  
  app.put('/profiles/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const {name, bio, apikey} = req.body
  
    pool.query(
      'UPDATE profiles SET name = $1, bio = $2, apikey = $3 WHERE id = $4 RETURNING id',
      [name, bio, apikey, id],
      (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).send({status: 'success', message: 'Profile updated with ID: ${id}'})
      })
  })

// app
//   .route('/profiles')
//   // GET endpoint
//   .get(getProfiles)
//   // POST endpoint
//   .post(addProfiles)

// app
//   .route('/profiles/:id')
//   //GET with id endpoint
//   .get(getProfilesById)
//   //UPDATE endpoint
//   .put(updateProfiles)
//   // DELETE endpoint
//   .delete(deleteProfiles)

  

// Start server
app.listen(process.env.PORT || 3002, () => {
  console.log(`Server listening`)
})