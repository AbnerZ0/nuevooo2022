const {Model, DataTypes, Sequelize } = require ('sequelize');

const VENTA_TABLE = 'tipoventa';

const TipoVentaSchema = {
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

class TipoVenta  extends Model {
  static associate(){

  }

  static config(sequelize){
    return{
      sequelize,
      tableName: VENTA_TABLE,
      modelName: 'TipoVenta',
      timestamps: false
    };
  }
}

module.exports ={ VENTA_TABLE, TipoVentaSchema, TipoVenta};
