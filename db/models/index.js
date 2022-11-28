const { TRABAJADOR_TABLE, TrabajadorSchema, Trabajador} = require('./trabajadores.model');
/* const { VENTAS_TABLE, VentaSchema, Venta} = require('./ventas.model'); */
//repetir esto para invocar mas instancoias

function setupModels(sequelize){
  Trabajador.init(TrabajadorSchema, Trabajador.config(sequelize));
}
/* function setupModels(sequelize){
  Venta.init(VentaSchema, Venta.config(sequelize));
} */
module.exports= setupModels;
