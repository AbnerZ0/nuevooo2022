const {ValidationError} = require('sequelize');

function  logError(err, req, res, next) { //  imprime lo que venga y luego lo envia
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next) {// recibe el error y lo muestra
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) { //para ver si es un error
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      errors: err.errors

    });
}
next(err);
}

module.exports = { logError, errorHandler, boomErrorHandler, ormErrorHandler};
