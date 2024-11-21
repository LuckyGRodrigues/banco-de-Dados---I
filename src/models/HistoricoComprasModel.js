import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Pedido from './PedidoModel';
import Consumidor from './ConsumidorModel';

const historicoCompras = sequelize.define(
  'historico_compras',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    data: {
      field: 'data',
      type: DataTypes.STRING(15),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

historicoCompras.belongsTo(Consumidor, {
  as: 'consumidor',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idConsumidor',
    allowNull: false,
    field: 'id_consumidor',
  },
});

historicoCompras.belongsTo(Pedido, {
  as: 'pedido',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idPedido',
    allowNull: false,
    field: 'id_pedido',
  },
});

export default historicoCompras;
