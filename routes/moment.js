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

  router.post('/moment', (req, res, next) => {
    const name = req.body.name;
    const category = req.body.category;
    const tsFrom = req.body.tsFrom;
    const tsTo = req.body.tsTo;

    Moment.add(name, category, tsFrom, tsTo)
      .then((result) => {

        // success
        res.json({result});

      })
      .catch(err => res.sendStatus(500)); // error
  });
  
  return router;
}