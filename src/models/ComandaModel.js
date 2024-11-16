import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Pedido from './PedidoModel';

const Comanda = sequelize.define(
  'comanda',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    data: {
      field: 'data',
      type: DataTypes.STRING(11),
    },
    hora: {
      field: 'hora',
      type: DataTypes.STRING(8),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Comanda.belongsTo(Pedido, {
  as: 'pedido',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idPedido',
    allowNull: false,
    field: 'id_pedido',
  },
});

export default Comanda;
