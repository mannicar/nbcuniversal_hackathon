const express = require('express');
const router  = express.Router();

const Chat = require('../services/Chat.js');

module.exports = (io) => {

  router.get('/:momentId', (req, res, next) => {

    Chat.getAll()
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