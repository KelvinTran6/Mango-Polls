const router = require('express').Router()
let Poll = require('../models/polls')


router.route('/').get((req,res)=>{
    Poll.find()
        .then(polls => res.json(polls))
        .catch(err => res.status(400).json ('Error: '+ err));
});


router.route('/add').post((req,res)=>{
    const title = req.body.title;
    const description = req.body.description
    const newPoll = new Poll({title,description})
    newPoll.save()
        .then(() => res.json('poll added!'))
        .catch(err => res.status(400).json ('Error: '+ err));
});


router.route('/:id').get((req,res)=>{
    Poll.findById(req.params.id)
        .then(polls => res.json(polls))
        .catch(err => res.status(400).json ('Error: '+ err));
});

module.exports = router;