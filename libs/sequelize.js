const {Sequelize} = require ('sequelize');

const {config} = require('./../config/config');

const USER = econdeURIComponent(config.dbUser);
const PASSWORD = econdeURIComponent(config.dbPassword);

const URI=`postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const sequelize = new Sequelize (URI,{
  dialect: 'postgres',
  logging: true

});
module.exports= sequelize;
