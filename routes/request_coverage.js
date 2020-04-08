const express = require('express');

module.exports = db => {
    const router = express.Router();

    router.get('/', async (req, res) => res.json(await db.model('request_coverage').findAll()));

    router.get('/:test', async (req, res) => {
    //    res.json(await db.model('request_coverage').findOne({ where: { id: req.params.userId }}));
    res.json({"Message":"Welcome to Node js"});
    });


    return router;
};
