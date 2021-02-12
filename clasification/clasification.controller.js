const Clasifications = require('./clasification.dao');

exports.createClasification = (req, res, next)=>{
    const clasification ={
        id: req.body.id,
        name: req.body.name
    };
    console.log(req.body);
    console.log(clasification);
    Clasifications.create(clasification, (err, clasification) =>{
        if (err) return  res.json({ error: err});
        res.json({ message: 'Clasification created successfully'});
    });
}

exports.getClasification = (req, res, next) => {
    Clasifications.get({}, (err, clasifications) =>{
        if(err) return  res.json({ error: err});
        res.json({ Clasifications: clasifications})
    });
}

exports.updateClasification = (req, res, next) => {
    const clasification = {
        id: req.body.id,
        name: req.body.name,
        director: req.body.director,
        clasification: req.body.clasification  
    };
    Clasifications.update({ _id: req.params.id}, clasification, (err, clasification) =>{
        if(err) return  res.json({error: err});
        res.json({ message: 'Clasification successfully updated.'});
    });
}


exports.removeClasification = (req, res, next) => {
    Clasifications.delete({_id: req.params.id}, (err, clasifications) =>{
        if(err) return  res.json({ error: err });
        res.json({ message: 'Clasification deleted.' });
    });
}