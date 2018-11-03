const express = require('express');
const router  = express.Router();

const Chat = require('../services/Chat.js');

module.exports = (io) => {

  router.get('/messages/:momentId', (req, res, next) => {
    const id = req.params.momentId

    Chat.getByMomentId(id)
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