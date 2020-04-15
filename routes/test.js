const express = require('express');

module.exports = db => {
    const router = express.Router();

    router.get('/', async (req, res) => res.json(await db.model('test').findAll({
      attributes: ['name']
    })));
    router.get('/:ins', async (req, res) =>{
        name =  req.query.name;
        res.json(await db.model('test').upsert({name: name}))
      });
          //  res.json(await db.model('test').findAll()));

      /*  router.get('/:userId', async (req, res) => {
            res.json(await db.model('users').findOne({ where: { id: req.params.userId }}));
        });*/

      // TODO: post to create a user
      // TODO: put to update a user
      // TODO: delete to delete a user

      return router;
    };
