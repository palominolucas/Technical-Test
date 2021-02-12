'use strict'

const Movies = require('./movie.dao');


exports.createMovie = (req, res, next)=>{
    const movie ={
        id: req.body.id,
        name: req.body.name,
        director: req.body.director,
        clasification: req.body.clasification
    };
    console.log(req.body);
    console.log(movie);
    Movies.create(movie, (err, movie) =>{
        if (err) return  res.json({ error: err});
        res.json({ message: 'Movie created successfully'});
    });
}


exports.getMovie = (req, res, next) => {
    Movies.get({}, (err, movies) =>{
        if(err) return res.json({ error: err});
        res.json({ Movies: movies});
    });
}


exports.updateMovie = (req, res, next) => {
    const movie = {
        id: req.body.id,
        name: req.body.name,
        director: req.body.director,
        clasification: req.body.clasification  
    };
    Movies.update({ _id: req.params.id}, movie, (err, movie) =>{
        if(err) return  res.json({error: err});
        res.json({ message: 'Movie successfully updated.'});
    });
}


exports.removeMovie = (req, res, next) => {
    Movies.delete({_id: req.params.id}, (err, movies) =>{
        if(err) return  res.json({ error: err });
        res.json({ message: 'Movie deleted.'});
    });
}