import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import Usuario from './UsuarioModel';

const Funcionario = sequelize.define(
  'funcionario',
  {
    id: {
      field: 'id',
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    funcao: {
      field: 'funcao',
      type: DataTypes.STRING(100),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

Funcionario.belongsTo(Usuario, {
  as: 'pedido',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    name: 'cpfUsuario',
    allowNull: false,
    field: 'cpf_usuario',
  },
});

export default Funcionario;
