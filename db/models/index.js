const { Cliente } = require('./clientes.model');
const { TRABAJADOR_TABLE, TrabajadorSchema, Trabajador} = require('./trabajadores.model');
const { VENTTAS_TABLE, VentaSchema, Venta} = require('./ven.model');
const { CLIENTES_TABLE, ClienteSchema, Cliente2} = require('./clientes.model');
//repetir esto para invocar mas instancoias

function setupModels(sequelize){
  Trabajador.init(TrabajadorSchema, Trabajador.config(sequelize));
  Venta.init(VentaSchema, Venta.config(sequelize));
  Cliente2.init(ClienteSchema, Cliente2.config(sequelize));
}
module.exports= setupModels;
