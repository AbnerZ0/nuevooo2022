const { rejects } = require('assert');
const crypto = require('crypto'); //para crear codigos UUID
const boom = require('@hapi/boom');
const {models} = require('./../libs/sequelize');


class ventaService {

  constructor() {
    this.ventas = [];
    this.generate(10);
  }

  generate(limite) {
    for (let index = 0; index < limite; index++) {
      this.ventas.push({
        id: crypto.randomUUID(), //da el ID
        nombre: 'Venta : ' + index, //genera los nombres
        /* cantidad: 1 + Math.floor(Math.random()*190), */
        estaBloqueado: Math.random() < 0.25 //valor boolean
      }); //genera DNI aleatorios entre 0 y 1
    }
  }

  async create (data) {
    const nuevoventa = {
      id: crypto.randomUUID(), //creo productos y le coloco us ID
      ...data //desempaquetado
    };
    const salida = await models.ventas.create(nuevoventa);
    return salida; // devuelvo el nuevo producto en el metodo create
  }

  async find() {

    return this.ventas;
  }

  async findOne(id) {
    const nueva1 = await  models.ventas.findByPk(id);
    if(!nueva1){
      throw boom.notFound('abnerlas');
    }
    return nueva1;
  }

  async update(id , changes) {
    const nueva2= await this.findOne(id);
    const salida = await nueva2.update(changes);
    return salida;

  }

  async delete(id) {
    const nueva3 = await this.findOne(id);
    await nueva3.destroy();
    return{id};
  }
}

module.exports = ventaService
