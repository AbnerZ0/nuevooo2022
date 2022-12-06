const {Model, DataTypes, Sequelize } = require ('sequelize');

const TRABAJADOR_TABLE = 'trabajadores12';

const TrabajadorSchema = {
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

class Trabajador extends Model {
  static associate(){

  }

  static config(sequelize){
    return{
      sequelize,
      tableName: TRABAJADOR_TABLE,
      modelName: 'Trabajador',
      timestamps: false
    };
  }
}

module.exports ={ TRABAJADOR_TABLE, TrabajadorSchema, Trabajador};
