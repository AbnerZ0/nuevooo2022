const { rejects } = require('assert');
const crypto = require('crypto'); //para crear codigos UUID
const boom = require('@hapi/boom');
const {models} = require('./../libs/sequelize');


class trabajadorService {

  constructor() {
    this.trabajadores = [];
    this.generate(10);
  }

  generate(limite) {
    for (let index = 0; index < limite; index++) {
      this.trabajadores.push({
        id: crypto.randomUUID(), //da el ID
        nombre: 'trabajador ' + index, //genera los nombres
        DNI: 10000 + Math.floor(Math.random()*190000000000),
        estaBloqueado: Math.random() < 0.25 //valor boolean
      }); //genera DNI aleatorios entre 0 y 1
    }
  }

  async create (data) {
    const nuevotrabajador = {
      id: crypto.randomUUID(), //creo productos y le coloco us ID
      ...data //desempaquetado
    };
    const salida = await models.Trabajador.create(nuevotrabajador);
    return salida; // devuelvo el nuevo producto en el metodo create
  }

  async find() {
    const salida = await models.Trabajador.findAll();
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
    const trabaj = await  models.Trabajador.findByPk(id);
    if(!trabaj){
      throw boom.notFound('abnerlas');
    }
    return trabaj;
/*     const trabaj =  this.trabajadores.find(trabajador => { //seguarda en la variable insum
      return trabajador.id === id;
    }); //!ultizamos la negacición(!) para ver si es no es producto
    if (!trabaj) { //consulta del error
      throw boom.notFound('Producto no encontrado'); //lanza un error boom
    }
    return trabaj; //si no es un error devuelve el insum */
  }

  async update(id , changes) {
    const trabaj1= await this.findOne(id);
    const salida = await trabaj1.update(changes);
    return salida;
/*     const index = this.trabajadores.findIndex(trabajador =>{
      return trabajador.id === id;
    });
    if (index === -1) {
      throw boom.notFound('Producto no encontrado');
    }
    const trabajador = this.trabajadores[index];
    this.trabajadores[index] = {
      ...trabajador,
      ...changes
    };
    return this.trabajadores[index]; */
  }

  async delete(id) {
    const trabaj3 = await this.findOne(id);
    await trabaj3.destroy();
    return{id};
  }
}

module.exports = trabajadorService
