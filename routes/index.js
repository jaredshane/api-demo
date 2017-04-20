
'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./shows'))

router.get('/', function (req, res) {
  res.json({
    "title": "The TV Faves API",
    "shows": "https://api-demo-jf.herokuapp.com/api/v1/shows",
    "favorites": "https://api-demo-jf.herokuapp.com/api/v1/shows/favorites?showId=<show_id>",
    "directors": "https://api-demo-jf.herokuapp.com/api/v1/shows/directors?showId=<show_id>"
  })
})

module.exports = router;
