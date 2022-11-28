const Joi = require('joi');
//creacion de los campos que vamos a validar
const id = Joi.string()
              .uuid();//campo id
const nombre = Joi.string() //valor
                  .alphanum()
                  .min(8)
                  .max(20);
const dni = Joi.number() //valor
                  .integer()
                  .min(2);
const sexo = Joi.string() //valor
                  .min(2);
const edad = Joi.number() //valor
                  .min(2);

const createClienteSchema = Joi.object({
  nombre: nombre.required(),//etiqueta < >Valor
  dni: dni.required(),
  sexo: sexo,
  edad: edad


});
//creación de los objetos de validación, los esquemas
const updateClienteSchema = Joi.object({
  nombre: nombre,
  dni: dni,
  sexo: sexo,
  edad: edad
});

const getClienteSchema = Joi.object({
  id: id.required()
});

module.exports = { createClienteSchema, updateClienteSchema, getClienteSchema };
