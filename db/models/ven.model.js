const {Model, DataTypes, Sequelize } = require ('sequelize');
const {VENTA_TABLE} = require('./tipoventa.model');

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

  /* tipoVentaId:{
    field: 'tipoventa_id',
    allowNull: true, //no puedes dejarlo en null, no puedes tener ventas que no perteneczcan  atipoventas
    type: DataTypes.UUID,
    references: {
      model: VENTA_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }, */
  createdAT: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

class Venta extends Model {
  static associate(models){  //esto es un metodo
    this.belongsTo(models.TipoVenta, {as:'tipoventa'});


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
