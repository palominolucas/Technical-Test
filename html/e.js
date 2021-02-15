'use strict'


var selector = document.getElementById("eclass-select");
var edit = document.getElementById("edit");

getMovies()
    .then(movies => {
        listadoMovies(movies)
    })
    .catch(error =>{
        console.log(error);
    });

function getMovies() {
    return fetch("http://localhost:27017/api")
}

function listadoMovies(movies) {
    movies.map((movies, i) => {
        let opts = selector + document.createElement("option");
        opts.value = movie;

    });
};

edit.action = "http://localhost:27017/api/put" + movie;