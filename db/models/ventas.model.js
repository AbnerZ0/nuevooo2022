const {Model, DataTypes, Sequelize } = require ('sequelize');

const VENTAS_TABLE = 'nuevas';

const VentaSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },
  precio: {
    allowNull: false,
    type: DataTypes.INTEGER
  },

  createdAT: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

class Venta extends Model {
  static associate(){

  }

  static config(sequelize){
    return{
      sequelize,
      tableName: VENTAS_TABLE,
      modelName: 'Venta',
      timestamps: false
    };
  }
}

module.exports ={ VENTAS_TABLE, VentaSchema, Venta};
