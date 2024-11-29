import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Pagamento from './PagamentoModel';

const Cartao = sequelize.define(
  'cartao',
  {
    id: {
      field: 'id_cartao',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    operadoraCartao: {
      field: 'operadora_cartao',
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Cartao.belongsTo(Pagamento, {
  as: 'pagamento ',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idPagamento',
    allowNull: false,
    field: 'id_pagamento',
  },
});

export default Cartao;
