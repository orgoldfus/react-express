const express = require('express')
const router = express.Router()

router.get('/message', (req, res) => {
  res.status(200).send({message: 'api response'})
})

module.exports = router
