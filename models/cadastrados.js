const Sequelize = require('sequelize');
const db = require('../config/database');

const Cadastrados = db.define('cadastrado', {
    codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Cadastrados;