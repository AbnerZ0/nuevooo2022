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
    const salida = await models.Venta.create(nuevoventa);
    return salida; // devuelvo el nuevo producto en el metodo create
  }

  async find() {

    const salida = await models.Venta.findAll();
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
    const nueva1 = await  models.Venta.findByPk(id);
    if(!nueva1){
      throw boom.notFound('abnerlas');
    }
    return nueva1;
  }

  async update(id , changes) {
    const nueva2= await this.findOne(id);
    const salida = await nueva2.update(changes);
    return salida;
    /* const index = this.ventas.findIndex(venta =>{
      return venta.id === id;
    });
    if (index === -1) {
      throw boom.notFound('Producto no encontrado');
    }
    const venta = this.ventas[index];
    this.ventas[index] = {
      ...venta,
      ...changes
    };
    return this.ventas[index]; */
  }

  async delete(id) {
    const nueva3 = await this.findOne(id);
    await nueva3.destroy();
    return{id};
    /* const index = this.ventas.findIndex(venta =>{
      return venta.id === id;
    });
    if (index === -1) {
      throw boom.notFound('Producto no encontrado');
    }
    this.ventas.splice(index, 1);
    return { id }; */
  }
}

module.exports = ventaService
