const Joi = require('joi');
//creacion de los campos que vamos a validar
const id = Joi.string()
              .uuid();//campo id
const nombre = Joi.string() //valor
                  .max(20);


                    const createTipoVentaSchema = Joi.object({
                        nombre: nombre.required()
                        //etiqueta < >Valor
                    /*  cantidad: cantidad.required() */
                    });
                    //creación de los objetos de validación, los esquemas
                    const updateTipoVentaSchema = Joi.object({
                        nombre: nombre

                        /* cantidad: cantidad */
                    });

                    const getTipoVentaSchema = Joi.object({
                        id: id.required()
                    });

module.exports = {createTipoVentaSchema,updateTipoVentaSchema, getTipoVentaSchema};
