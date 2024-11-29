import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import TipoAeronave from './TipoAeronaveModel';

const Aeronave = sequelize.define(
  'aeronave',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Aeronave.belongsTo(TipoAeronave, {
  as: 'tipoAeronave',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idTipoAeronave',
    allowNull: false,
    field: 'id_tipo_aeronave',
  },
});

export default Aeronave;
