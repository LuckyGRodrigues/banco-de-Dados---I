import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Cliente from './ClienteModel';

const Reserva = sequelize.define(
  'reserva',
  {
    id: {
      field: 'id_reserva',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dataReserva: {
      field: 'data_reserva',
      type: DataTypes.DATE,
    },
    horaReserva: {
      field: 'hora_reserva',
      type: DataTypes.TIME,
    },
    statusReserva: {
      field: 'status_reserva',
      type: DataTypes.BOOLEAN,
    },
    assento: {
      field: 'assento',
      type: DataTypes.INTEGER,
    },
    codigoVoo: {
      field: 'codigo_voo',
      type: DataTypes.STRING(10),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Reserva.belongsTo(Cliente, {
  as: 'cliente',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idCliente',
    allowNull: false,
    field: 'id_cliente',
  },
});

export default Reserva;
