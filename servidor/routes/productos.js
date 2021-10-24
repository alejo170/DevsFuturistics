const express = require('express');
const router = express.Router();
const { Productos } = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



// Crea un nuevo producto
router.post('/newproduct', (req, res) => {
    console.log('req', req.body);
    Productos.create(
        req.body
    ).then(product => {
        res.json(product);
    })
});


// Envia todos los productoa
router.get('/allproducts', (req, res) => {

    Productos.findAll().then(product => {
        res.json(product);
    })
})

router.get('/allproducts', (req, res) => Productos.findAll()
    .then(product => {
        console.log(product);
        res.sendStatus(200);
    })
.catch(err => console.log(err)));


// Elimina un producto por codigodebarras
router.delete('/deleteproduct', (req, res) => {
    Productos.destroy({
        where: {
            // id: req.params.id
            codigobarras: req.body.idBuscar

        }
    }).then(result => {
        res.json(result);
    })
});


//Actualiza por cedula
router.patch('/updateproduct', (req, res) => {

    Productos.update({
        descripcion: req.body.descripcion,
        codigobarras: req.body.codigobarras,
        valor: req.body.valor,
        estado: req.body.estado
    }, {
        where: {
            codigobarras: req.body.idBuscar
       
        //     id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });

});





module.exports = router;
