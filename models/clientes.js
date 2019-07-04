const Sequelize = require('sequelize');
const db = require('../config/database');

const Cliente = db.define('cliente', {
    codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cargo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pais: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Cliente;