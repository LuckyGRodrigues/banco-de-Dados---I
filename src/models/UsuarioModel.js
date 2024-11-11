import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const Usuario = sequelize.define(
  'usuario',
  {
    cpf: {
      field: 'cpf',
      type: DataTypes.STRING(11),
      primaryKey: true,
    },

    nome: {
      field: 'nome',
      type: DataTypes.STRING(100),
    },

    telefone: {
      field: 'telefone',
      type: DataTypes.NUMBER(20),
    },

    email: {
      field: 'email',
      type: DataTypes.STRING(100),
    },

    status: {
      field: 'status',
      type: DataTypes.BOOLEAN,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default Usuario;
