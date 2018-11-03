const express = require('express');
const router  = express.Router();

const Chat = require('../services/Chat.js');

module.exports = (io) => {

  router.get('/:momentId', (req, res, next) => {

    Chat.getByMomentId()
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