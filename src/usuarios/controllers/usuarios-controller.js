const express = require ('express');
const routes = express.Router();
const Usuario = require('../models/usuario');
const { where } = require('sequelize');

function findAllRoute() {
    routes.get('/usuarios',async(req, res) =>{
    const users = await Usuario.findAll();
        res.json(users);
    });
}

function createRoute() {
    routes.post('/usuarios', async(req, res) =>{
        console.log('CREATE ', req.body);
        await Usuario.create(req.body)
        res.json();
    });
}
function findByIdRoute() {
    routes.get('/usuarios/:id', async (req, res) =>{
        const users = await User.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json([]);
    });
}
function updateRoute() {
    routes.put('/usuarios',async(req, res) =>{

        await Usuario.update(req.body,{
            where:{
                id: req.body.id
            }
        });
        res.json([]);
    });
}
function removeRoute() {
    routes.delete('/usuarios/:id',async(req, res) =>{
        await Usuario.destroy({
            where:{
                id:req.params.id
            }
        });
        res.json([]);
    });
}

function registraUsuarioRotas(){
    findAllRoute();
    createRoute();
    removeRoute();
    findByIdRoute();
    updateRoute();
    return routes;
}

 module.exports = registraUsuarioRotas;