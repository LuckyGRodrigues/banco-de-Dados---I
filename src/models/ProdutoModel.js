import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Pedido from './PedidoModel';

const Produto = sequelize.define(
  'produto',
  {
    id: {
      field: 'id',
      type: DataTypes.STRING(11),
      autoIncrement: true,
      primaryKey: true,
    },

    nome: {
      field: 'nome',
      type: DataTypes.STRING(100),
    },

    descricaoProduto: {
      field: 'descricao_produto',
      type: DataTypes.NUMBER(20),
    },

    quantidade: {
      field: 'quantidade',
      type: DataTypes.STRING(100),
    },

    valor: {
      field: 'valor',
      type: DataTypes.BOOLEAN,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Produto.belongsTo(Pedido, {
  as: 'pedido',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idPedido',
    allowNull: false,
    field: 'id_pedido',
  },
});

export default Produto;
