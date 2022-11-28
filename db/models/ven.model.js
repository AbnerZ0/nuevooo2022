const {Model, DataTypes, Sequelize } = require ('sequelize');

const VENTTAS_TABLE = 'actualventa';

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
      tableName: VENTTAS_TABLE,
      modelName: 'Venta',
      timestamps: false
    };
  }
}

module.exports ={ VENTTAS_TABLE, VentaSchema, Venta};
