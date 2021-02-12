'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const clasificationSchema = require('../clasification/clasification.model');


const movieSchema = new Schema({
    id:{
        type: String, 
        unique: true,    
        require:true
    },
    name:{
        type: String,   
        require: true,
        unique: true    
    },
    director:{
        type: String,
        require: true
    },
    clasification: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clasification'
    }

},
{
    timestamp: true
});

/*

movieSchema.path('clasification').validate(function (value, respond) {
    clasificationModel.findOne({_id: value}, function (err, doc) {
        if (err || !doc) {
            respond(false);
        } else {
            respond(true);
        }
    });

}),

*/

module.exports = movieSchema;