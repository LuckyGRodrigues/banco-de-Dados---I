import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Pedido from './PedidoModel';
import Servico from './ServicoModel';

const PedidoProduto = sequelize.define(
  'pedido_servico',
  {
    idPedido: {
      field: 'id_pedido',
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idServico: {
      field: 'id_servico',
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

PedidoProduto.belongsTo(Pedido, {
  as: 'pedido',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idPedido',
    allowNull: false,
    field: 'id_pedido',
  },
});

PedidoProduto.belongsTo(Servico, {
  as: 'servico',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idServico',
    allowNull: false,
    field: 'id_servico',
  },
});

export default PedidoProduto;
