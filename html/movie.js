'use strict'

var movies = [];
var tds = document.querySelector("tds");

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
        let tr_id = document.createElement("tr");
        let td_id = document.createElement("td");
        td_id.innerHTML = movie.id;
        td_id.appendChild(movie);

        let td_name = document.createElement("td");
        td_name.innerHTML = movie.name;
        td_name.appendChild(movie);

        let td_direct = document.createElement("td");
        td_direct.innerHTML = movie.direct;
        td_direct.appendChild(movie);

        let td_class = document.createElement("td");
        td_class.innerHTML = movie.class;
        td_class.appendChild(movie);

        let view_input = document.createElement("input");
        view_input.type = "submit";
        view_input.value = "View";
        view_input.id = "view-inp";
        view_input.formMethod = "get";
        view_input.formAction = "http://localhost:27017/api/get"

        let del_input = document.createElement("input");
        del_input.type = "submit";
        del_input.value = "Delete";
        del_input.id = "del-inp";
        view_input.formMethod = "delete";
        view_input.formAction = "http://localhost:27017/api/delete"


    });
};





