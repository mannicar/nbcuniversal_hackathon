const express = require('express');
const router  = express.Router();

const Message = require('../services/Message.js');
const Chat = require('../services/Chat.js');

module.exports = (io) => {

  router.get('/:chatId/messages', (req, res, next) => {
    const id = req.params.chatId

    Message.getByChatId(id)
      .then((messages) => {

        // no data
        if(!messages) res.sendStatus(204);

        // success
        res.json({messages});

      })
      .catch(err => res.sendStatus(500)); // error
  });

  router.get('/chats', (req, res, next) => {

    Chat.getAll()
      .then((chats) => {

        // no data
        if(!chats) res.sendStatus(204);

        // success
        res.json({chats});

      })
      .catch(err => res.sendStatus(500)); // error
  });

  router.post('/chat', (req, res, next) => {
    const name = req.body.name;
    const category = req.body.category;
    const startTime = req.body.startTime;
    const duration = req.body.duration;

    Chat.add(name, category, startTime, duration)
      .then((result) => {

        // success
        res.json({result});

      })
      .catch(err => res.sendStatus(500)); // error
  });
  
  return router;
}