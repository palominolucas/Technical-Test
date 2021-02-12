'use strict'

const mongoose = require('mongoose');
const movieSchema = require('./movies.model');



movieSchema.statics = {
    create: function (data, cb){
        const movie = new this(data);
        movie.save(cb);
    },
    get: function (query, cb) {
        this.find(query, cb).populate("clasification");
    },
    update: function (query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData}, {new: true}, cb);
    },
    delete: function (query, cb) {
        this.findOneAndDelete(query, cb);
    }
}



const moviesModel = mongoose.model('Movies', movieSchema);

module.exports = moviesModel;