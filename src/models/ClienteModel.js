import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const Pessoa = sequelize.define(
  'pessoa',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    rg: {
      field: 'rg',
      type: DataTypes.STRING(12),
    },
    dataNascimento: {
      field: 'email',
      type: DataTypes.STRING(100),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default Pessoa;
