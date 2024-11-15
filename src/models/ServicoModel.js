import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Pedido from './PedidoModel';

const Servico = sequelize.define(
  'servico',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nome: {
      field: 'nome',
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    descricaoServico: {
      field: 'descricao_servico',
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    valor: {
      field: 'valor',
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Servico.belongsTo(Pedido, {
  as: 'pedido',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'idPedido',
    allowNull: false,
    field: 'id_pedido',
  },
});

export default Servico;
