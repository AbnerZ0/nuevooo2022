const { rejects } = require('assert');
const crypto = require('crypto'); //para crear codigos UUID
const boom = require('@hapi/boom');
const {models} = require('./../libs/sequelize');

class clienteService {

  constructor() {
    this.clientes = [];
    this.generate(10);
  }

  generate(limite) {
    for (let index = 0; index < limite; index++) {
      this.clientes.push({
        id: crypto.randomUUID(), //da el ID
        nombre: 'cliente ' + index, //genera los nombres
        DNI: 10000 + Math.floor(Math.random()*190000000000),
        estaBloqueado: Math.random() < 0.25 //valor boolean
      }); //genera DNI aleatorios entre 0 y 1
    }
  }

  async create (data) {
    const nuevocliente = {
      id: crypto.randomUUID(), //creo productos y le coloco us ID
      ...data //desempaquetado
    };
    const salida = await models.Cliente1.create(nuevocliente);
    return salida; // devuelvo el nuevo producto en el metodo create
  }

  async find() {
    const salida = await models.Cliente1.findAll();
 /*    const query = 'select * from usuarios';
    const [data] = await sequelize.query(query); */
    return salida;
    //
    //
    //
    //
    //
    //
    //
    //
  }

  async findOne(id) {
    const nueva12 = await  models.Cliente1.findByPk(id);
    if(!nueva12){
      throw boom.notFound('abnerlas');
    }
    return nueva12;
  }

  async update(id , changes) {
    const nueva22= await this.findOne(id);
    const salida = await nueva22.update(changes);
    return salida;
  }

  async delete(id) {
    const nueva33 = await this.findOne(id);
    await nueva33.destroy();
    return{id};
  }
}

module.exports = clienteService
