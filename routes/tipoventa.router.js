const express = require('express');
const router = express.Router();
const validatorHandler = require('./../middlewares/validator.handler');
const { createTipoVentaSchema, updateTipoVentaSchema, getTipoVentaSchema} = require('./../schemas/tipoventa.schema');
const TipoVentaService = require ('./../services/tipoventa.service');
const service = new TipoVentaService();
///falta

router.get('/', async (req, res) => {
    const tipoventa = await service.find();
    res.status(200).json(tipoventa);
  });



router.get('/:id',
  validatorHandler(getTipoVentaSchema, 'params'),//validamos el ID
  async (req, res, next) => {
try{ // si yo lanzo el desde el findOne
const { id } = req.params;
const tipoventa = await service.findOne(id);//lanzador de error
res.status(200).json(tipoventa);
}catch(error){ //aca atrapa el error desde find One
next(error);//envia el error al siguiente middleware
}
});

router.post('/',
            validatorHandler(createTipoVentaSchema, 'body'),//validamos que los datos que vamos a ingresar esten bien
            async (req, res) => {
  const body = req.body;
  const nuevoTipoVenta = await service.create(body);
  res.status(201).json({
    message: 'creado',
    nuevoTipoVenta
  });
});

router.patch('/:id',
            validatorHandler(getTipoVentaSchema, 'params'),//validamos primero el id
            validatorHandler(updateTipoVentaSchema, 'body'),//validamos que los datos que vamos a ingresar esten bien
            async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const tipoventa = await service.update(id, body);
    res.status(200).json({
      message: 'actualizado',
      tipoventa
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id',
              validatorHandler(getTipoVentaSchema, 'params'),
              async (req, res, next) => {
  try {
    const { id } = req.params;
    const rta = await service.delete(id);
    res.json({
      message: 'eliminado',
      rta
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
