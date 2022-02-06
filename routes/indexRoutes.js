const router = require('express').Router();
const path = require('path');

// get notes.html file and display on client
router.get('/notes', function (req,res){
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

// get index.html file and display on client
router.get('/', function (req,res){
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = router;