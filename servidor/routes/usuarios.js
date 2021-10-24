const express = require('express');
const router = express.Router();
const { Usuarios } = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


//router.get('/pruebausuarios', (req, res) => {
//    const vehiculos=[
//        {nombre:"camilo",marca:"camaro",modelo:"2021"},
//        {nombre:"hola",marca:"camaro",modelo:"2021"},
//        {nombre:"camilo",marca:"camaro",modelo:"2021"},
//    ];
//    res.send(vehiculos);
//    console.log("Accedio a la base de datos desde front");
//});


//Trae todos los usuarios
router.get('/allusers', (req, res) => {

   Usuarios.findAll().then(users => {
        res.json(users);
   })
})

//router.get('/allusers', function(req, res) {
//    Sequelize.sync()
//    .then(function() {
//      return Usuarios.findAll();
//    })
//    .then(function(users) {
//      res.json(users);
//       console.log(JSON.stringify(users));
//     })
//  });

router.get('/allusers', (req, res) => Usuarios.findAll()
.then(users => {
    console.log(users);
    res.sendStatus(200);
})
.catch(err => console.log(err)));

//Actualiza por cedula
router.patch('/update/', (req, res) => {

    Usuarios.update({
        nombre: req.body.nombre,
        identificador: req.body.identificador,
        email: req.body.email,
        rol: req.body.rol
    }, {
        where: {
            identificador: req.body.cedulaB
       
        //     id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });

});


// // Crea un nuevo usuario
router.post('/newuser', (req, res) => {
    console.log('req', req.body);
    Usuarios.create(
        req.body
    ).then(product => {
        res.json(product);
    })
});

// Elimina un usuario por numero de cedula
router.delete('/deleteuser', (req, res) => {
    Usuarios.destroy({
        where: {
            // id: req.params.id
            identificador: req.body.cedulaB

        }
    }).then(result => {
        res.json(result);
    })
});

router.post('/crearusuario', async(req, res) => {
    
    try {
        var response = ''
        response =  await Usuarios.findAll({
            where: { email: req.body.email }
//                include: [{
//                    model: Role
//                }]
        });

        if (response.length === 0) {
            let userCreated = await Usuarios.create(
                {
                    nombre: req.body.nombre,
                    identificador: req.body.identificador,
                    email: req.body.email,
                    rol: req.body.rol


                }
            );
            res.json(userCreated);
            return;
        }
        console.log('response user exist', response[0].dataValues);
        res.json({ user: response[0].dataValues });

    } catch (error) {
        console.log('error', error);
    }
});

module.exports = router;