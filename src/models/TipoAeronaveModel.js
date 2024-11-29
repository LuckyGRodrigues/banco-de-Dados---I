import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const TipoAeronave = sequelize.define(
  'tipo_aeronave',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    descricao: {
      field: 'descricao',
      type: DataTypes.STRING(120),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default TipoAeronave;
