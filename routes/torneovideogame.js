const express = require('express');
const router = express.Router();

const { list, read, create, remove, torneovideogameById, photo } = require('../controllers/videogameController.js');

// list 
router.get('/torneovideogames', list);
router.post('/torneocreate', create)
router.get('/photo/:torneovideogameId', photo)
router.get('/:torneovideogameId', read)
router.delete('/:torneovideogameId', remove)
router.param("torneovideogameId", torneovideogameById);
module.exports = router;