'use strict'
const Clasifications = require('./clasification.controller');
module.exports = (router) => {
    router.post('/add_clasi', Clasifications.createClasification);
    router.get('/clasis', Clasifications.getClasification);
    router.put('/update_clasi/:id', Clasifications.updateClasification);  
    router.delete('/remove_clasi/:id', Clasifications.removeClasification);
}