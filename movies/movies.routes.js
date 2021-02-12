'use strict'

const Movies = require('./movies.controller');
module.exports = (router) => {
    router.post('/add_movie', Movies.createMovie);
    router.get('/movies', Movies.getMovie);
    router.put('/update_movie/:id', Movies.updateMovie);  
    router.delete('/remove_movie/:id', Movies.removeMovie);
}