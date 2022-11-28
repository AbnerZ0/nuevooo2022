const {Model, DataTypes, Sequelize } = require ('sequelize');

const CLIENTES_TABLE = 'clientess';

const ClienteSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },
  dni: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  sexo: {
    allowNull: false,
    type: DataTypes.STRING
  },
  edad: {
    allowNull: false,
    type: DataTypes.NUMBER
  },
  createdAT: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

class Cliente2 extends Model {
  static associate(){

  }

  static config(sequelize){
    return{
      sequelize,
      tableName: CLIENTES_TABLE,
      modelName: 'Cliente1',
      timestamps: false
    };
  }
}

module.exports ={ CLIENTES_TABLE, ClienteSchema, Cliente2};
