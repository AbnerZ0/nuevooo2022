/* const {Model, DataTypes, Sequelize } = require ('sequelize');

const INSUMO_TABLE = 'tipoinsumo';

const TipoInsumoSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },


  createdAT: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

class TipoInsumo  extends Model {
  static associate(){

  }

  static config(sequelize){
    return{
      sequelize,
      tableName: INSUMO_TABLE,
      modelName: 'TipoInsumo',
      timestamps: false
    };
  }
}

module.exports ={ INSUMO_TABLE, TipoInsumoSchema, TipoInsumo};
 */
