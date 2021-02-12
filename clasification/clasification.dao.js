const mongoose = require('mongoose');
const clasificationSchema = require('./clasification.model');

clasificationSchema.statics = {
    create: function (data, cb){
        const clasification = new this(data);
        clasification.save(cb);
    },
    get: function (query, cb) {
        this.find(query, cb);
    },
    update: function (query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData}, {new: true}, cb);
    },
    delete: function (query, cb) {
        this.findOneAndDelete(query, cb);
    }

}


const clasificationModel = mongoose.model('Clasification', clasificationSchema);

module.exports = clasificationModel;