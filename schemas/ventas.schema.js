const Joi = require('joi');
//creacion de los campos que vamos a validar
const id = Joi.string()
              .uuid();//campo id
const nombre = Joi.string() //valor
                  .alphanum()
                  .min(8)
                  .max(20);
/* const cantidad = Joi.number() //valor
                  .integer()
                  .min(2); */
const precio = Joi.number() //valor
                  .integer()
                  .min(2);

const createVentaSchema = Joi.object({
  nombre: nombre.required(),
  precio: precio//etiqueta < >Valor
 /*  cantidad: cantidad.required() */
});
//creación de los objetos de validación, los esquemas
const updateVentaSchema = Joi.object({
  nombre: nombre,
  precio: precio
  /* cantidad: cantidad */
});

const getVentaSchema = Joi.object({
  id: id.required()
});

module.exports = { createVentaSchema, updateVentaSchema, getVentaSchema };
