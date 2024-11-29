import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Reserva from './ReservaModel';

const Pagamento = sequelize.define(
  'pagamento',
  {
    id: {
      field: 'id_pagamento',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    parcelas: {
      field: 'parcelas',
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Pagamento.belongsTo(Reserva, {
  as: 'reserva',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idReserva',
    allowNull: false,
    field: 'id_reserva',
  },
});

export default Pagamento;
