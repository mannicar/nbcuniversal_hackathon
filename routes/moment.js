const express = require('express');
const router  = express.Router();

const Moment = require('../services/Moment.js');

module.exports = (io) => {

  router.get('/moments', (req, res, next) => {

    Moment.getByMomentId()
      .then((messages) => {

        // no data
        if(!messages) res.sendStatus(204);

        // success
        res.json({messages});

      })
      .catch(err => res.sendStatus(500)); // error
  });
  
  return router;
}