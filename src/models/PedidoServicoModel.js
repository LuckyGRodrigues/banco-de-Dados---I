import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Pedido from './PedidoModel';
import Servico from './ServicoModel';

const PedidoServico = sequelize.define(
  'pedido_servico',
  {
    idPedido: {
      field: 'id_pedido',
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idServico: {
      field: 'id_pedido',
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

PedidoServico.belongsTo(Pedido, {
  as: 'pedido',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idPedido',
    allowNull: false,
    field: 'id_pedido',
  },
});

PedidoServico.belongsTo(Servico, {
  as: 'servico',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idServico',
    allowNull: false,
    field: 'id_servico',
  },
});

export default PedidoServico;
