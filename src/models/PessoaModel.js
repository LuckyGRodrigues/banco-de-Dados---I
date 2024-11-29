import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const Pessoa = sequelize.define(
  'pessoa',
  {
    cpf: {
      field: 'cpf',
      type: DataTypes.STRING(14),
      primaryKey: true,
    },
    nome: {
      field: 'nome',
      type: DataTypes.STRING(100),
    },
    email: {
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
