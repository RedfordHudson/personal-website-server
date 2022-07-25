const express = require('express').Router();

const linkSchema = require('../schema/schema.link')

express.get('/',(req,res) => {
    linkSchema.find({})
        .then(links => res.send(links))
        .catch(err => res.status(500).send('ERROR: '+err))
})

module.exports = express;