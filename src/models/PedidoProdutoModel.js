import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Pedido from './PedidoModel';
import produto from './ProdutoModel';

const PedidoProduto = sequelize.define(
  'pedido_produto',
  {
    idPedido: {
      field: 'id_pedido',
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    idProduto: {
      field: 'id_produto',
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    quantidade: {
      field: 'quantidade',
      type: DataTypes.NUMBER,
      allowNull: false,
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

PedidoProduto.belongsTo(produto, {
  as: 'produto',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idProduto',
    allowNull: false,
    field: 'id_produto',
  },
});

export default PedidoProduto;
