const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.json({msg: 'Teacher'})
    })

    .post((req, res) => {
        res.json({msg: 'Teacher'})
    });

router.route('/:id')
    .get((req, res) => {
        res.json({msg: 'Get Teacher'})
    })
    .put((req, res) => {
        res.json({msg: 'Edit Teacher'})
    })
    .delete((req, res) => {
        res.json({msg: 'Delete Teacher'})
    });  

module.exports=  router;