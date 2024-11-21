import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Usuario from './UsuarioModel';

const Pedido = sequelize.define(
  'pedido',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Pedido.belongsTo(Usuario, {
  as: 'usuario',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'cpfUsuario',
    allowNull: false,
    field: 'cpf_usuario',
  },
});

export default Pedido;
