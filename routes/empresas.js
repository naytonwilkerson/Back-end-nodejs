const express = require('express');
const router = express.Router();
const Empresa = require('../models/empresas');

router.get("/", (req, res) =>
    Empresa.findAll()
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        }));

        router.get("/:id", (req, res) => {
            Empresa.findOne({
                where: {
                    codigo: req.params.id,
                }
            }).then(result => {
                if(result) {
                    res.json(result);
                } else {
                    res.sendStatus(404);
                }
            }).catch(error => {
                res.status(412).json({msg: error.message});
            });
        })

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/search/params', (req, res) => {
    var query = `%${req.query.nome}%`;

    console.log(query)
    Empresa.findAll({where: {nome: { [Op.like]: query } } })
    .then(empresa => res.json(empresa))
    .catch(err => console.log(err));
});

router.delete("/:id", (req, res) => {
    Empresa.destroy({
        where: {
            codigo: req.params.id
        }
    })
    .then(result => res.sendStatus(204))
    .catch(error => {
        res.status(412).json({msg: error.message});
    });
});

router.post('/', (req, res) => {
    console.log(req.body);
    Empresa.create(req.body)
    .then(result => res.json(result))
    .catch(error => {
        res.status(412).json({msg: error.message});
    });
});

router.put('/', (req, res) => {
    Empresa.update(req.body, {
        where: {
            codigo: req.body.codigo
        }
    })
    .then(result => res.sendStatus(204))
    .catch(error => {
        res.status(412).json({msg: error.message});
    });
});

    module.exports = router;