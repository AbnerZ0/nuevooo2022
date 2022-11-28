const Joi = require('joi');
//creacion de los campos que vamos a validar
const id = Joi.string()
              .uuid();//campo id
const nombre = Joi.string() //valor
                  .min(8)
                  .max(20);
const precio = Joi.number() //valor
                  .integer()
                  .min(2);

const createTrabajadorSchema = Joi.object({
  nombre: nombre.required(),//etiqueta < >Valor
  precio: precio.required()
});
//creación de los objetos de validación, los esquemas
const updateTrabajadorSchema = Joi.object({
  nombre: nombre,
  precio: precio
});

const getTrabajadorSchema = Joi.object({
  id: id.required()
});

module.exports = { createTrabajadorSchema, updateTrabajadorSchema, getTrabajadorSchema };
