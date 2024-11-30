import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Reserva from './ReservaModel';

const HistoricoReserva = sequelize.define(
  'historico_reservas',
  {
    id: {
      field: 'id_historico',
      type: DataTypes.INTEGER,
      autoIncrement: true,
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

HistoricoReserva.belongsTo(Reserva, {
  as: 'reserva',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idReserva',
    allowNull: false,
    field: 'id_reserva',
  },
});

export default HistoricoReserva;
