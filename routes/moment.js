const express = require('express');
const router  = express.Router();

const Moment = require('../services/Moment.js');

module.exports = (io) => {

  router.get('/moments', (req, res, next) => {

    Moment.getAll()
      .then((moments) => {

        // no data
        if(!moments) res.sendStatus(204);

        // success
        res.json({moments});

      })
      .catch(err => res.sendStatus(500)); // error
  });
  
  return router;
}