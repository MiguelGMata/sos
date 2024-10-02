const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.json({msg: 'Student'})
    })

    .post((req, res) => {
        res.json({msg: 'Student'})
    });

router.route('/:id')
    .get((req, res) => {
        res.json({msg: 'Get Student'})
    })
    .put((req, res) => {
        res.json({msg: 'Edit Student'})
    })
    .delete((req, res) => {
        res.json({msg: 'Delete Student'})
    });  

module.exports=  router;