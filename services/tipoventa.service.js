const { rejects } = require('assert');
const crypto = require('crypto'); //para crear codigos UUID
const boom = require('@hapi/boom');
const {models} = require('./../libs/sequelize');
const { Venta } = require('../db/models/ven.model');
const { TipoVenta } = require('../db/models/tipoventa.model');

class TipoVentaService {
    constructor () {

    }

    async create (data) {
        const nuevoTipoVenta = {
          id: crypto.randomUUID(), //creo productos y le coloco us ID
          ...data //desempaquetado
        };
        const salida = await models.TipoVenta.create(nuevoTipoVenta);
        return salida; // devuelvo el nuevo producto en el metodo create
      }

      async find() {
        const salida = await models.Venta.findAll();
        return salida;
      }

      async findOne(id) {
        const tiponueva1 = await  models.TipoVenta.findByPk(id,{include: Venta});
        if(!tiponueva1){
          throw boom.notFound('no encontrado');
        }
        return tiponueva1;
      }

      async update(id , changes) {
        const tiponueva2= await this.findOne(id);
        const salida = await tiponueva2.update(changes);
        return salida;

      }

      async delete(id) {
        const tiponueva3 = await this.findOne(id);
        await tiponueva3.destroy();
        return{id};
      }
}

module.exports =TipoVentaService;
