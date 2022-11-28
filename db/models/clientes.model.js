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
    type: DataTypes.INTEGER
  },
  sexo: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  edad: {
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

class Cliente extends Model {
  static associate(){

  }

  static config(sequelize){
    return{
      sequelize,
      tableName: CLIENTES_TABLE,
      modelName: 'cliente',
      timestamps: false
    };
  }
}

module.exports ={ CLIENTES_TABLE, ClienteSchema, Cliente};
